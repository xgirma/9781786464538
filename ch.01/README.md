# Everything you should know about React
        imperative and declarative 
        react components and their instances
        element to control user-interface flow 
        concept of separation of concern 
        
## Declarative programming 
React enforces `declarative` programming paradigm. 

A real-life ordering a beer in a bar would be `1. take a glass from the shelf, 2. put the glass in front of the draft, 3. pull down the handle until the glass is full, and 4 pass me the glass`. In the declarative would you just say `beer, please`. The declarative approach of asking for a beer assumes that the bartender knows how to serve one. 

Example, create a `toLowerCase()` 

Imperative
```javascript
const toLowerCase = input => {
    const output = []; // use variable

    for (let i = 0; i < input.length; i++) {
        output.push(input[i].toLowerCase()); // keep + update value
    }

    return output;
};
```

Declarative
```javascript
const toLowerCase = input => input.map(value => value.toLowerCase());
```

The important differences to note: the declarative approach is elegant and easy to read. Which makes a huge difference in big code bases, where maintainability is crucial. There ia also no need to use variables nor to keep their values updated during the execution. `Declarative programming, in fact, tends to avoid creating and mutating a state`.

React example

Imperative
```javascript
const map = new google.maps.Map(document.getElementsById('map'), {
    zoom: 4,
    center: myLatLng,
})

const marker = new google.maps.Marker({
    position: myLatLng,
    title: 'Hello World!',
})

marker.setMap(map)
```   
Declarative
```html
<Gmaps zoom={4} center={myLatLng}>
    <Marker position={myLatLng} Hello world! />    
</Gmaps>
```

In declarative programming, we only describe what we want to achieve and there is no need to list all the steps to make it work.

# React elements
Whenever you call `createClass`, extend `Component`, or simply declare a `stateless function` you are creating a component. React manages all the instances of your components at runtime, and there can be more than one instance of the same component in memory at a given point in time. 

React follows a declarative paradigm, and there's no need to tell it how to interact with the DOM; you just declare what you want to see on the screen and React does the job for you. 

To control the user-interface flow, React uses `a particular type of object`, called `element`, which describes what has to be shown on the screen. These `immutable objects` (elements) are much simpler compared to the components and their instances, and contain only the information that is strictly needed to represent the interface. 

An example of an element
```javascript
{
    type: Title,
    props: {
        color: 'red',
        chidren: 'Hello, Title!'
    }
}
```
Element have a `type`, which is the most important attribute, and some properties. There is also a special property, called `children`, which is optional and represents the direct descendants of the element.
        
        type
        properties 
            childeren (special property)
        
The `type` is very important because it tells React how to deal with the element itself. In fact, if the type is a string, the element represents a `DOM node`, while if the type is a function, the element is a `component`. 

DOM elements and components can be nested with each other, to represent the render tree: 

```javascript
{
    type: Title,
    props: {
        color: 'red',
        children: {
            type: 'h1',
            props: {
                children: 'Hello, H1!'
            }
        }
    }
}
```

`reconciliation`

When the type of the element is a function, React calls it, passing the `props` to `get back the underling elements`. It keeps on performing the same operation recursively in the result until it gets a tree of DOM nodes, which React can render on the screen. This process is called `reconciliation`, and it is used by both React DOM and React Native to create the user interfaces of their respective platforms. 

## Unlearning everything
React brings a new way of designing web and mobile application. 

In the past `separation of concerns` was important, separating the logic from the templates. Our goal has always been to write the JavaScript and the HTML in different files. 

JavaScript interacts with the DOM elements rendered by the templates to update the user-interface, even if they are loaded from separate files.

The same problem applies to styles: they are defined in a different file, but they are referenced in the templates and the CSS selectors follow the structure of the markup, so it is almost impossible to change without breaking the other. 

That is why the classic separation of concerns ended up being more a separation of technologies, which is of course not a bad thing, but it does not solve any real problems. 

React tries to move a step forward by putting the templates where they belong: next to the logic. The reason it does that is because React suggests you organize your applications by composing small bricks called `components`. 

```javascript
render() {
    return (
        <button style={{ color: 'red'}} onClick={this.handleClick}>
            Click me !
        </button>
    )
}
```

React also trying to push to the community: moving the styling logic inside the component.  

```javascript
var divStyle = {
    color: 'white',
    msTransition: 'all'
}

ReactDOM.render(
    <div style={divStyle}>Hello World!</div>
    mountNode
)
```
