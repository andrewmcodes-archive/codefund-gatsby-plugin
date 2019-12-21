"use strict"
import { onRenderBody } from "../gatsby-ssr"

describe(`@codefund/gatsby-plugin`, () => {
  describe(`onRenderBody`, () => {
    describe(`in development mode`, () => {
      it(`does not set any head components`, () => {
        const setHeadComponents = jest.fn()
        const config = { propertyId: `0` }
        onRenderBody({ setHeadComponents }, config)

        expect(setHeadComponents).not.toHaveBeenCalled()
      })
    })

    describe(`in production mode`, () => {
      let env: any

      beforeAll(() => {
        env = process.env.NODE_ENV
        process.env.NODE_ENV = `production`
      })

      afterAll(() => {
        process.env.NODE_ENV = env
      })

      it(`sets the correct head components`, () => {
        const setHeadComponents = jest.fn()
        const config = { propertyId: `1` }

        onRenderBody({ setHeadComponents }, config)

        expect(setHeadComponents.mock.calls).toMatchSnapshot()
      })
    })
  })
})
