import { NatsConnection } from 'nats';
import { QUEUE_GROUPS } from '../groups';
import { NatsListener } from '../NatsListener';
export declare class UserListener extends NatsListener {
    queueGroupName: QUEUE_GROUPS;
    protected client: NatsConnection;
    constructor(client: NatsConnection);
    onCreate(data: any): void;
    onUpdate(data: any): void;
    onDelete(data: any): void;
}
