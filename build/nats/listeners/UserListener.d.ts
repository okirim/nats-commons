import { QUEUE_GROUPS } from '../groups';
import { NatsListener } from '../NatsListener';
export declare class UserListener extends NatsListener {
    queueGroupName: QUEUE_GROUPS;
}
