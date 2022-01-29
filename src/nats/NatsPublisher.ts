
import { NatsSubject } from './subjects';
import { NatsConnection, StringCodec, RequestOptions } from 'nats';

interface Event {
    subject: NatsSubject;
    data: any;
}

export abstract class NatsPublisher<T extends Event> {
    abstract subject: T['subject'];
    protected client: NatsConnection;

    constructor(client: NatsConnection) {
        this.client = client;
    }

    publish(data: T['data']): Promise<void> {
        const string_codec = StringCodec();
        //const requestOptions:RequestOptions ={}
        return new Promise((resolve, reject) => {
            this.client.publish(this.subject, string_codec.encode(data));
        });
    }
}
