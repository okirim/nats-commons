
// import { NatsSubject } from './subjects';
import { NatsConnection, StringCodec, RequestOptions } from 'nats';
import { NatsSubject } from './subjects';


export class NatsPublisher {

    protected client: NatsConnection;

    constructor(client: NatsConnection) {
        this.client = client;
    }
    publish<T>(subject: NatsSubject, data: T): Promise<void> {
        console.log('event published: ', subject.toString())
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
