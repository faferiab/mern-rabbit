export interface Logger {
    debug(message: string, ...params: any[]): void
    warn(message: string, ...params: any[]): void
    error(message: string, ...params: any[]): void
    info(message: string, ...params: any[]): void
}

export type LoggerLevel = 'DEBUG' | 'WARN' | 'ERROR' | 'INFO'