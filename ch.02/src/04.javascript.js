/** @jsx dom */

var { dom } = require("deku");

var profile = dom(
    "div",
    null,
    dom("img", { src: "avatar.png", className: "profile" }),
    dom(
        "h3",
        null,
        [user.firstName, user.lastName].join(' ')
    )
);
