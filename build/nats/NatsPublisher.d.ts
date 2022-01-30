import { NatsConnection } from 'nats';
import { NatsSubject } from './subjects';
export declare class NatsPublisher {
    protected client: NatsConnection;
    constructor(client: NatsConnection);
    publish<T>(subject: NatsSubject, data: T): Promise<void>;
}
