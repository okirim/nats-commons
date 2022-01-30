import { QUEUE_GROUPS } from '../groups';
import { NatsListener } from '../NatsListener';

export class OrderListener extends NatsListener{
    queueGroupName: QUEUE_GROUPS=QUEUE_GROUPS.ORDER_GROUP;
    
}