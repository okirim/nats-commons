import { NatsSubject } from './subjects';
import { NatsConnection, Msg, Subscription } from 'nats';
interface Event {
    subject: NatsSubject;
    data: any;
}
export declare abstract class NatsListener<T extends Event> {
    abstract subject: T['subject'];
    abstract queueGroupName: string;
    protected client: NatsConnection;
    protected subscription: Subscription;
    constructor(client: NatsConnection);
    listen(): Subscription;
    parseMessage(msg: Msg): string;
}
export {};
