import { NatsConnection, Msg, Subscription } from 'nats';
import { QUEUE_GROUPS } from './groups';
import { NatsSubject } from './subjects';
export declare abstract class NatsListener {
    abstract queueGroupName: QUEUE_GROUPS;
    protected client: NatsConnection;
    constructor(client: NatsConnection);
    listen(subject: NatsSubject): Promise<Subscription>;
}
export declare const decodeMessage: (msg: Uint8Array) => string;
export declare const getData: (msg: Msg) => string;
