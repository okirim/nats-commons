
// import { NatsSubject } from './subjects';
import { NatsConnection, StringCodec, RequestOptions } from 'nats';

// interface Event {
//     subject: NatsSubject;
//     data: any;
// }

export class NatsPublisher {
    //abstract subject: T['subject'];
    protected client: NatsConnection;

    constructor(client: NatsConnection) {
        this.client = client;
    }

    publish(subject: string, data: Record<string, any>): Promise<void> {
        console.log('event published!! ', subject)
        const string_codec = StringCodec();
        //const requestOptions:RequestOptions ={}
        return new Promise((resolve, reject) => {
            try {
                const publish = this.client.publish(subject, string_codec.encode(JSON.stringify(data)));
                resolve(publish)
            } catch (error) {
                reject(error)
            }
        });
    }
}
