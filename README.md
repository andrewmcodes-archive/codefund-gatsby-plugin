# EXPERIMENTAL

# @codefund/gatsby-plugin

Easily add a [CodeFund](https://codefund.io/) ad to your Gatsby site.

## Install

```sh
# NPM
npm install --save @codefund/gatsby-plugin

# Yarn
yarn add @codefund/gatsby-plugin
```

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `@codefund/gatsby-plugin`,
    options: {
      propertyId: 'YOUR_CODEFUND_PROPERTY_ID'
    },
  },
]
```

Then in your view, just import the package and render it:

```jsx
import { CodeFund } from "@codefund/gatsby-plugin"

export default class FooBar extends React.Component {
  render() {
    return (
      <CodeFund />
    )
  }
}
