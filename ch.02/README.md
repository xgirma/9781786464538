# Clean up your code

        to write clean and maintainable JSX code
        Babel, Linting, 
        functional programming 
       
## JSX        
React provides two ways to define our `elements`. 

> 1. using JavaScript functions
> 2. using JSX (XML-like syntax)

A simple JSX. 

```javascript
class HelloMessage extends React.Component {
    render () {
        return <div> Hello {this.props.name} </div>
    }
}

ReactDOM.render(<HelloMessage name="Girma" />, mountNode);
```

## Babel
In order to use JSX (and some features of ES2015) in our code, we have to install `Babel`. JSX and ES2015 advanced features make our code cleaner for development, but the browser cannot understand and execute it. 

The solution is to write our scripts in JSX and ES2015, and when we are ready to ship, we compile the sources into ES5, the standard specification implemented in major browser today. 

Babel can 
> 1. compile `ES2015` code into `ES5`
> 2. compile `JSX` into `JavaScript functions`. 

The above process is called `transpilation` because it compiles the source into a new source rather than into an `executable`.

        npm install --save-dev babel-cli 
        
We can run `$ babel source.js -o output.js` to compile any JavaScript file.

### ES2015 code into ES5  
> $ npm install --save-dev babel-preset-es2015
> $ ./node_modules/.bin/babel ch.02/01.es6.js --presets es2015 -o ch.02/02.es5.js

ES2015
````javascript
const toLowerCase = input => input.map(value => value.toLowerCase());
````

ES5
```javascript
"use strict";

var toLowerCase = function toLowerCase(input) {
  return input.map(function (value) {
    return value.toLowerCase();
  });
};
```

### JSX into JavaScript
> $ npm install --save-dev babel-plugin-transform-react-jsx
> $ ./node_modules/.bin/babel --plugins transform-react-jsx ch.02/03.jsx.js  -o ch.02/04.javascript.js

JSX
```javascript
/** @jsx dom */

var { dom } = require("deku");

var profile = <div>
    <img src="avatar.png" className="profile" />
    <h3>{[user.firstName, user.lastName].join(' ')}</h3>
</div>;
```
JavaScript
````javascript
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
````

### ES2015/JSX to JavaScript
> $ npm install --save-dev babel-cli babel-preset-react
> $ ./node_modules/.bin/babel ch.02/05.es6.jsx.js --presets react -o ch.02/06.javascript.js

React
````javascript
class HelloMessage extends React.Component {
    render () {
        return <div> Hello {this.props.name} </div>
    }
}

ReactDOM.render(<HelloMessage name="Girma" />, mountNode);
````

JavaScript
```javascript
class HelloMessage extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            " Hello ",
            this.props.name,
            " "
        );
    }
}

ReactDOM.render(React.createElement(HelloMessage, { name: "Girma" }), mountNode);
```
### .babelrc
We can also create, preferably, a `.babelrc` file on the root. 

.babelrc
```javascript
{
    "preset": [
        "es2015",
        "react"
    ]
}
```

This is how you would create a `div` with React's `createElement` function, 

```javascript
React.createElement('div')
``` 

And this is the JSX for creating a `div` element: 

```html
<div />
```

The big difference is that we are writing the markup inside a `.js` file, but it is important to note that JSX is only syntactic sugar and it gets transpiled into JavaScript before being executed in the browser. 

### DOM elements and React components
With JSX, we can create both HTML elements and React components, `the only difference is whether or not they start with a capital letter`. 

For example, to render an HTML button, we use `<button />`, while to render our Button components we use `<Button />`. 

The first button transpiled into the following 

```javascript
React.createElement('button')
```

The second one is transpiled into the following
```javascript
React.createElement(Button)
```
The difference here is that in the first call we are passing the type of the DOM element as a string, while in the second call we are passing the component itself, which means that it should exist in the scope to work.

### Children
JSX allowes you to define childeren to describe the tree of elements and compose complex user-interfaces. 

A link can be enclosed inside a `div` for some layout requirements, and JSX snippet to achieve that is as follows: 

> ./node_modules/.bin/babel --plugins transform-react-jsx ch.02/07.jsx.js  -o ch.02/08.javascript.js

JSX
```html
var image = <div>
    <a href="https://facebook.github.io/react/">Click me!</a>
</div>;
```
JavaScript
```javascript
"use strict";

var image = React.createElement(
    "div",
    null,
    React.createElement(
        "a",
        { href: "https://facebook.github.io/react/" },
        "Click me!"
    )
);
```

The good part is that we are not limited to having elements as children of elements, but we can use JavaScript expressions such as function or variables.

### Differences with HTML
Differences between JSX and HTML
#### Attributes
JSX is not a standard language and it gets transpiled into JavaScript. Because of this, some attributes cannot be used. For example, instead of `class` we have to use `className`, and instead of `for`, we have to use `htmlFor`

```html
<label className="shot-label" htmlFor="name" />
```

#### Style
The `style` attribute does not accept a CSS string as the HTML parallel does, but it expects a JavaScript object where the style names are `camelCased`.

```javascript
<div style={{ backgroundColor: 'red' }} />
```

#### Root
JSX elements get translated into JavaScript functions and you cannot return two functions in JavaScript, whenever you have multiple elements at the same level, you are foced to wrap them into a parent. 

The following:
````html
<div />
<div />
````
This gives us the following error:
> Adjacent JSX elements must be wrapped in an enclosed tag

On the other hand, the following works:
```html
<div>
    <div />
    <div />
</div>
```
#### Spaces
JSX handles the spaces between text and elements differently from HTML. 

Consider the following snippet: 
```html
<div>
    <span>foo</span>
    bar
    <span>baz</span>
</div>
```

In the browser, which interprets HTML, this could give you `foo bar baz`, which is exactly what we expect. In JSX, instead, the same code would be rendered as `foobarbaz`, which is because the three nested lines get transpiled as individual children of the `div` element, without taking the `spaces` into account. A common solution to get the same output, is putting a space explicitly between the element: 

```html
<div>
    <span>foo</span>
    {' '}
    bar
    {' '}
    <span>baz</span>
</div>
```

#### Boolean attributes
In JSX, if you set an attribute without value, JSX assumes that its value is true, following the same behavior of the HTML `disabled attribute`, for example. 

This means that if we want to set an attribute to false, we have to declare it explicitly as false: 

```javascript
<button disabled />
React.createElement("button", { disabled: true });
```
More example
```javascript
<button disabled={ false } />
React.createElement("button", { disabled: false });
```

### Spread attributes 
A common practice that leads to fewer bugs is not to pass entire JavaScript object down to children by reference, but to use their primitive values, which can be easily validated, making components more robust and error-proof. 

Let's see how it works
```javascript
class SpreadAttributes extends React.Component {
    render () {
        const foo = { id: 'bar' };
        return (<div {...foo} />)
    }
}

ReactDOM.render(<SpreadAttributes />, mountNode);
```

The preceding code gets transpiled into the following:
```javascript
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpreadAttributes = function (_React$Component) {
    _inherits(SpreadAttributes, _React$Component);

    function SpreadAttributes() {
        _classCallCheck(this, SpreadAttributes);

        return _possibleConstructorReturn(this, (SpreadAttributes.__proto__ || Object.getPrototypeOf(SpreadAttributes)).apply(this, arguments));
    }

    _createClass(SpreadAttributes, [{
        key: 'render',
        value: function render() {
            var foo = { id: 'bar' };
            return React.createElement('div', foo); // ***
        }
    }]);

    return SpreadAttributes;
}(React.Component);

ReactDOM.render(React.createElement(SpreadAttributes, null), mountNode);

```