import * as _WebSocket from 'ws';
import WebSocket = require('ws');
interface SSConfig {
    exitOnError?: boolean;
}
type Listener<T =Record<string, unknown>> = (rawRequest: WebSocket.RawData, parsed?: T) => (void | Promise<void>);
export class SocketService {
    public connections: WebSocket[] = [];

    private wss?: WebSocket.Server;

    private isRunning: boolean = false;
    private configuration: SSConfig = {};

    private port = 8080;
    private logger = console;

    private listeners: Listener[] = [];

    constructor() {
        // this.logger.setContext('Socket');
        this.configure({
            exitOnError: false
        })
    }

    public addListener<T extends  Record<string, unknown>>(listener: Listener) {
        this.listeners.push(listener);
    }
    public configure = (config: SSConfig) => {
        this.configuration = config;
    };

    public shutdown() {
        // this.logger.info('Trying to shut down WebsocketServer');
        this.wss?.close((e) => {
            if (e) {
                this.logger.error(`Can't shutdown the WebSocketServer!!`);
                this.logger.error(e);
            }
            this.logger.info('WebsocketServer is Offline now.');
        });
    }

    public sendToClient<T = string>(data: T) {
        if (this.isRunning) {
            this.connections.forEach((connection) => {
                try {
                    connection.send(data);
                } catch (e) {
                    if (this.configuration.exitOnError) {
                        process.exit(1);
                    }
                    throw Error('Error sending data to Websocket Client.');
                }
            });
        } else {
            if (this.configuration.exitOnError) {
                process.exit(1);
            }
            throw Error('Please make sure that the Websocket server is running!');
        }
    }

    public startServer(afterStarting: () => void, port = 8080) {
        this.port = port;
        this.logger.info(`Starting a WebsocketServer at port ${this.port}`);
        this.wss = new _WebSocket.Server({ port });
        this.setupListener(() => {
            this.logger.info(`WebsocketServer started at port ${this.port}`);
            afterStarting();
        });
    }

    private setupListener = (
        afterAdding: (...args: unknown[]) => Promise<void> | void,
    ) => {
        this.wss?.on('connection', (ws) => {
            ws.on('message', (message) => {
                try {
                    this.handleRequest(message);
                } catch {
                    this.logger.error(
                        'Failed handling WSS client request! ( send JSON data )'
                    );
                }
            });
            this.connections.push(ws);
            // this.handleRequest([]);
            // eslint-disable-next-line no-param-reassign
            ws.onclose = () => {
                this.onClientDisconnect(ws);
            };
        });
        this.isRunning = true;
        this.logger.info(`Connection Listener Setup Done. WSS-Port: ${this.port}`);
        afterAdding();
    };

    private handleRequest = (rawRequest: WebSocket.RawData) => {
        const notifyAll = (parsed?: Record<string, unknown>) => {
            for(const listener of this.listeners) {
                listener(rawRequest,parsed);
            }
        };

        try {
            let parsed: Record<string, unknown> = JSON.parse(rawRequest+'');
            notifyAll(parsed);
        } catch {
            this.logger.info(`can't parse request data`);
            notifyAll(undefined);
        }


    };


    private onClientDisconnect(ws: WebSocket) {
        this.connections = this.connections.filter((w) => w !== ws);
        this.logger.log('Overlay disconnected');
    }
}
