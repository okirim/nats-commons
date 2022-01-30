import { QUEUE_GROUPS } from '../groups';
import { NatsListener } from '../NatsListener';
export declare class OrderListener extends NatsListener {
    queueGroupName: QUEUE_GROUPS;
}
