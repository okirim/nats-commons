import { NatsConnection, Msg, StringCodec, Subscription } from 'nats';
import { QUEUE_GROUPS } from './groups';
import { NatsSubject } from './subjects';


export abstract class NatsListener {
    abstract queueGroupName: QUEUE_GROUPS
    protected client: NatsConnection;


    constructor(client: NatsConnection) {
        this.client = client;
    }

    listen(subject: NatsSubject): Promise<Subscription> {
        console.log('listen to ', JSON.stringify(subject))
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
const string_codec = StringCodec();
export const decodeMessage = (msg: Uint8Array) => {
    const message = string_codec.decode(msg)
    return message
}
export const getData = (msg: Msg) => {
    const data = string_codec.decode(msg.data)
    return data
}