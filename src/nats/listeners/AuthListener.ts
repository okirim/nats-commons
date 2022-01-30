import { QUEUE_GROUPS } from "../groups";
import { NatsListener } from "../NatsListener";

export class AuthListener extends NatsListener{
    queueGroupName: QUEUE_GROUPS=QUEUE_GROUPS.AUTH_GROUP;

}