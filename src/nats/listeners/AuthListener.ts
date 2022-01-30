import { QUEUE_GROUPS } from "../groups";
import { NatsListener } from "../NatsListener";

export abstract class AuthListener extends NatsListener {
    queueGroupName: QUEUE_GROUPS = QUEUE_GROUPS.AUTH_GROUP;

    abstract onCreate(): Promise<void>
    abstract onUpdate(): Promise<void>
    abstract onDelete(): Promise<void>
}