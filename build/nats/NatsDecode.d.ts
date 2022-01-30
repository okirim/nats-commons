import { Msg } from "nats";
export declare class NatsDecode {
    static string_codec: import("nats").Codec<string>;
    static decodeMessage(msg: Uint8Array): string;
    static getData<T>(msg: Msg): T;
}
