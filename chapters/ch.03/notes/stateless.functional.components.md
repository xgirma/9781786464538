# Stateless functional components

Introduced in React 0.14

```javascript
() => <button />
```

Instead of using the `createClass` factory or extending the `Component` we only define a function that returns the `element` need to be displayed. 

## Props and context
Stateless function take `props` and `context`. Component that are not able to receive any props from the parents are not particularly useful. 

```javascript
props => <button>{text}</text>
```

We can use ES2015 destructing. 

```javascript
({ text }) => <button>{text}</button>
```

```html
<script type="text/babel">
    const Button = ({text}) => <button>{text}</button>

    Button.propTypes = {
      text: PropTypes.string,
    }

    ReactDOM.render( <Button text={"ok"}/>, document.getElementById('root'))
</script>
```

the second parameter `context` represent the context of the prop.

```html
<script type="text/babel">
    const Button = ({text}, context) => <button>{context.currency}{text}</button>

    Button.propTypes = {
      text: PropTypes.string,
    }

    Button.contextTypes = {
      // TODO
    }

    ReactDOM.render( <Button text={"1000.00"}/>, document.getElementById('root'))
</script>
```

### the this keyword
One thing that makes the stateless functional components different from their stateful counter parts is the fact that `this` does not represent the component during their execution. 

For this reason it is not possible to use functions like `setState` or `lifecycle` methods that are associated with the component instance. 

### state
No state. They only receive props (and context), and they return the elements. This shoul remind us of the principles of Functional Programming. 

### lifecycle 
do not provide any lifecycle hooks. They just implement a render-like method. everything else has to be handled by the parent. 

### Refs and event handlers 
Since there is no component `instance`, to use `refs` or ` event handlers` you can define them in the following way

```javascript
() => {
  let input;
  
  const onClick = () => input.focus()
  
  return (
    <div>
      <input ref={el = (input = el)}/>
      <button onClick={onClick}>Focus</button>
    </div>
  )
}
```




 