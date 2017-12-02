"use strict";

function Greeting(props) {
    return React.createElement(
        "div",
        null,
        " ",
        props.isLoggedIn && React.createElement(LogoutButton, null),
        " "
    );
}
