import { QUEUE_GROUPS } from '../groups';
import { NatsListener } from '../NatsListener';
export abstract class PaymentListener extends NatsListener{
    queueGroupName: QUEUE_GROUPS=QUEUE_GROUPS.PAYMENT_GROUP;

    abstract onCreate(): Promise<void>
    abstract onUpdate(): Promise<void>
    abstract onDelete(): Promise<void>
}