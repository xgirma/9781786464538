"use strict";

function Selection(props) {
    return React.createElement(
        Choose,
        null,
        React.createElement(
            When,
            { condition: props.first },
            React.createElement(
                "span",
                null,
                "if"
            )
        ),
        React.createElement(
            When,
            { condition: props.second },
            React.createElement(
                "span",
                null,
                "else if"
            )
        ),
        React.createElement(
            Otherwise,
            null,
            React.createElement(
                "span",
                null,
                "else"
            )
        )
    );
}
