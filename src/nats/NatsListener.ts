
import { NatsSubject } from './subjects';
import { NatsConnection, Msg, StringCodec, Subscription } from 'nats';

// interface Event {
//     subject: NatsSubject;
//     data: any;
// }

export class NatsListener {
    //abstract subject: T['subject'];
    //abstract queueGroupName: string;
    queueGroupName: string = 'default-group';
    // abstract onMessage(data: T['data'], msg: Msg): void;
    protected client: NatsConnection;
    // protected ackWait = 5 * 1000;

    constructor(client: NatsConnection) {
        this.client = client;
    }

    listen(subject: string): Promise<Subscription> {
        console.log('listen to ', subject)
        return new Promise((resolve, reject) => {
            try {
                const subscription = this.client.subscribe(
                    subject,
                    { queue: this.queueGroupName }
                );
                resolve(subscription)
            } catch (error) {
                reject(error)
            }
        })
    }

}
export const decodeMessage = (msg: Msg) => {
    const string_codec = StringCodec();
    const data = string_codec.decode(msg.data)
    return data
}