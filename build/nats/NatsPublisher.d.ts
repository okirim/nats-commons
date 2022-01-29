import { NatsSubject } from './subjects';
import { NatsConnection } from 'nats';
interface Event {
    subject: NatsSubject;
    data: any;
}
export declare abstract class NatsPublisher<T extends Event> {
    abstract subject: T['subject'];
    protected client: NatsConnection;
    constructor(client: NatsConnection);
    publish(data: T['data']): Promise<void>;
}
export {};
//# sourceMappingURL=NatsPublisher.d.ts.map