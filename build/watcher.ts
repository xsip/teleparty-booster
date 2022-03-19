import {SocketService} from './socket-server';
import WebSocket from 'ws';
import { debounceWatch } from '@bscotch/debounce-watch';
import type { DebouncedEventsProcessor } from '@bscotch/debounce-watch';
const ws: SocketService = new SocketService();
import * as fs from 'fs';
ws.addListener(async (data: WebSocket.RawData, parsed?: Record<string, unknown>) => {
})

const setupWatcher = async (dir: string) => {

// Your function can be sync or async
    const processDebouncedEvents: DebouncedEventsProcessor = (events) => {
        for (const event of events) {
            if (event.event == 'change') {
                ws.sendToClient(fs.readFileSync('./dist/app.js','utf8'));
            }
        }
    };

    const watcher = await debounceWatch(processDebouncedEvents,dir, {
        debounceWaitSeconds: 3,
        allowOverlappingRuns: true,
    });
}

ws.startServer(async () => {
    setupWatcher('./dist');
}, 8080);