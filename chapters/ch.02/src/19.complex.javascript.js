"use strict";

function Secret(props) {
    return React.createElement(
        "div",
        null,
        props.dataIsReady && (props.isAdmin || props.userHasPermissions) && React.createElement(Secretdata, null)
    );
}
