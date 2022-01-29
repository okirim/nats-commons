import { NatsConnection } from 'nats';
export declare class NatsPublisher {
    protected client: NatsConnection;
    constructor(client: NatsConnection);
    publish(subject: string, data: Record<string, any>): Promise<void>;
}
