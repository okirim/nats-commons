import { NatsConnection, Msg, Subscription } from 'nats';
export declare class NatsListener {
    queueGroupName: string;
    protected client: NatsConnection;
    constructor(client: NatsConnection);
    listen(subject: string): Promise<Subscription>;
}
export declare const decodeMessage: (msg: Msg) => string;
