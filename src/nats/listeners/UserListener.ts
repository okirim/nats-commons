import { NatsConnection } from 'nats';
import { QUEUE_GROUPS } from '../groups';
import { NatsListener } from '../NatsListener';

export class UserListener extends NatsListener {
    queueGroupName: QUEUE_GROUPS = QUEUE_GROUPS.USER_GROUP;
    protected client: NatsConnection = null
    constructor(client: NatsConnection) {
        super(client)
        this.client = client
    }
    onCreate(data) {

    }
    onUpdate(data) {

    }

    onDelete(data) {

    }

}