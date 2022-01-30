import { QUEUE_GROUPS } from "../groups";
import { NatsListener } from "../NatsListener";
export declare class AuthListener extends NatsListener {
    queueGroupName: QUEUE_GROUPS;
}
