import { QUEUE_GROUPS } from '../groups';
import { NatsListener } from '../NatsListener';
export abstract class CartListener extends NatsListener{
    queueGroupName: QUEUE_GROUPS=QUEUE_GROUPS.CART_GROUP;

    abstract onCreate(): Promise<void>
    abstract onUpdate(): Promise<void>
    abstract onDelete(): Promise<void>
}