
import { NatsSubject } from './subjects';
import { NatsConnection, Msg, StringCodec, Subscription } from 'nats';

interface Event {
    subject: NatsSubject;
    data: any;
}

export abstract class NatsListener<T extends Event> {
    abstract subject: T['subject'];
    abstract queueGroupName: string;
    // abstract onMessage(data: T['data'], msg: Msg): void;
    protected client: NatsConnection;
    // protected ackWait = 5 * 1000;
    protected subscription: Subscription | null = null

    constructor(client: NatsConnection) {
        this.client = client;
    }

    listen(): Subscription {
        this.subscription = this.client.subscribe(
            this.subject,
            { queue: this.queueGroupName }
        );
        return this.subscription
    }

    parseMessage(msg: Msg) {
        const string_codec = StringCodec();
        const data = string_codec.decode(msg.data)
        return data
    }
}
