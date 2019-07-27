import { connect } from "net";

declare function Samo(url?: string, ssl?: boolean, protocols?: Array<string>): samo.Samo;

declare namespace samo {
  type MessageData = Object | Array<any> | string | number
  type Entry = {
    data: MessageData,
    created: number,
    updated: number,
    index: string
  }
  type Data = Entry | Array<Entry>
  type Stats = {
    keys: Array<string>
  }
  interface Samo extends Object {
    cache: MessageData
    forcedClose: Boolean
    readyState: Number
    frozen: Boolean
    connect(reconnectAttempt?: boolean): void
    close(reload?: boolean): void

    onopen(ev: Event): void
    onclose(ev: CloseEvent): void
    onconnecting(): void
    onmessage(data: MessageData): void
    onerror(ev: ErrorEvent): void
    onfrozen(ev: Event): void
    onresume(ev: Event): void

    encode(data: MessageData, index?: string): string
    decode(ev: MessageEvent): Data
    parseTime(ev: MessageEvent): number

    stats(url?: string): Stats
    get(mode: string, key: string, url?: string): Data
    publish(mode: string, key: string, data: MessageData, index?: string, url?: string): string
    unpublish(key: string, url: string): void
  }
}

export = Samo