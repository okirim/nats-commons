import { NatsConnection, Msg, Subscription } from 'nats';
import { QUEUE_GROUPS } from './groups';
export declare abstract class NatsListener {
    abstract queueGroupName: QUEUE_GROUPS;
    protected client: NatsConnection;
    constructor(client: NatsConnection);
    listen(subject: string): Promise<Subscription>;
}
export declare const decodeMessage: (msg: Uint8Array) => string;
export declare const getData: (msg: Msg) => string;
