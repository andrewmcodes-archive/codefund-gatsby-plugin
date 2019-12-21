import { createElement } from "react"
import { GatsbySsrContext } from "./types/gatsby"
import { PluginConfig } from "./gatsby-node"

export const onRenderBody = (
  { setHeadComponents }: GatsbySsrContext,
  config: PluginConfig
) => {
  if (process.env.NODE_ENV === `production`) {
    return setHeadComponents([
      createElement("script", {
        key: `codefund-gatsby-plugin`,
        src: `https://app.codefund.io/properties/${config.propertyId}/funder.js`,
        async: `async`,
      }),
    ])
  }
}
