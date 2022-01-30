import { connect, NatsConnection } from "nats";
const servers = ['http://nats:4222'];
const natsClient:Promise<NatsConnection> = connect({ servers })
export { natsClient }

