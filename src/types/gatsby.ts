export interface GatsbySsrContext {
  setHeadComponents: (components: React.ReactElement[]) => undefined
}

export interface GatsbyReporter {
  info: (msg: string) => null
  warn: (msg: string) => null
  error: (msg: string) => null
  panic: (msg: string) => null
  panicOnBuild: (msg: string) => null
}

export interface GatsbyContext {
  reporter: GatsbyReporter
}
