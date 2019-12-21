"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.onRenderBody = function (_a, config) {
    var setHeadComponents = _a.setHeadComponents;
    if (process.env.NODE_ENV === "production") {
        return setHeadComponents([
            react_1.createElement("script", {
                key: "codefund-gatsby-plugin",
                src: "https://app.codefund.io/properties/" + config.propertyId + "/funder.js",
                async: "async",
            }),
        ]);
    }
};
