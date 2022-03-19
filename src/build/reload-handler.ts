class ReloadHandler {
    searchForInterval?: number;
    constructor(private url: string = 'ws://localhost:8080') {
    }

    bootstrap() {
        this.createSocketConnection();
    }

    createSocketConnection() {
        console.log(`creating`);
        const connection: WebSocket = new WebSocket(this.url);
        connection.onopen = () => {
            console.log('connected');
        };

        connection.onerror = error => {
            console.log('error.. can not connect to backend!');
        };
        connection.onmessage = async (e: MessageEvent) => {
            await eval(e.data);
            connection.send(JSON.stringify({
                response: await eval(e.data)
            }));

        }

        connection.onclose = () => {
            connection.close();
            this.createSocketConnection();
        }
    }
}

const ext: ReloadHandler = new ReloadHandler();
ext.bootstrap();