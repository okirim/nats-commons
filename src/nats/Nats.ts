import { connect, NatsConnection } from "nats";

class Nats {
    protected servers = ['http://nats:4222']
    protected client: any

    get nats(): NatsConnection {
        if (!this.client) {
            throw new Error('Cannot access NATS client before connecting');
        }
        return this.client;
    }
    connect(): Nats {
        this.client = connect({ servers: this.servers })
            .then(nats => {
                this.client = nats
                console.log('nats is connected')

            })
            .catch(error => console.log(`error connecting to ${JSON.stringify(this.servers)}`, error))
        return this
    }

    close() {
        this.nats.close().catch((error => console.log('error to close nats ', error)))
    }
}

const nats_client = (): NatsConnection => {
    const nats_instance = new Nats()
    const init: Nats = nats_instance.connect()
    return init.nats
}

export { nats_client }


