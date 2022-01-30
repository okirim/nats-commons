import { StringCodec, Msg } from "nats";

export class NatsDecode {
    public static string_codec = StringCodec();
    public static decodeMessage(msg: Uint8Array) {
        const message = NatsDecode.string_codec.decode(msg)
        return message
    }
    public static getData<T>(msg: Msg): T {
        const data = NatsDecode.string_codec.decode(msg.data)
        return JSON.parse(data)
    }
}