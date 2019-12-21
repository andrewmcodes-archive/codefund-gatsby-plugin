import { GatsbyReporter, GatsbyContext } from "./types/gatsby"
export interface PluginConfig {
  propertyId: string
}
export const onPreBootstrap = async (
  context: GatsbyContext,
  pluginConfig: PluginConfig
) => {
  const config = { ...pluginConfig }
  const { reporter } = context
  validateConfig(config, reporter)
}
function validateConfig(config: PluginConfig, reporter: GatsbyReporter) {
  if (!config.propertyId) {
    throw new Error("[CodeFund] `propertyId` must be specified")
  }
}
