import { QUEUE_GROUPS } from '../groups';
import { NatsListener } from '../NatsListener';
export declare abstract class UserListener extends NatsListener {
    queueGroupName: QUEUE_GROUPS;
    abstract onCreate(): Promise<void>;
    abstract onUpdate(): Promise<void>;
    abstract onDelete(): Promise<void>;
}
