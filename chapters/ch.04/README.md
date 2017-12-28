# Chapter 4 - Compose All the Things

## 01 Communication between components 
Small components with a clean interface can be composed together to create complex applications that are maintainable and powerful. Whenever you compose components, you share data using `props`. Props are the way every parent component pass data to child component. 

```html
<div id="root" />
<script crossorigin src="https://unpkg.com/react@16.2.0/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16.2.0/umd/react-dom.development.js"></script>
<script crossorigin src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
<script crossorigin src="https://unpkg.com/prop-types@15.6.0/prop-types.js"></script>
<script type="text/babel" src="Picture.js"></script>
<script type="text/babel" src="Username.js"></script>
<script type="text/babel" src="Profile.js"></script>

<script type="text/babel">
  const user = {
    image: 'https://avatars3.githubusercontent.com/u/5876481?s=460&v=4',
    name: '360 Owl',
    screenname: '@360fly'
  };
  ReactDOM.render(<Profile user={user}/>, document.getElementById('root'));
</script>
```

```javascript
const Profile = ({ user }) => (
  <div>
    <Picture profileImageUrl={user.image} />
    <Username name={user.name} screenName={user.screenname} />
  </div>
);

Profile.propTypes = {
  user: PropTypes.object
};
```

```javascript
const Picture = ( { profileImageUrl }) => {
  return (
    <div> <img src={profileImageUrl}/> </div>
  )
};

Picture.propTypes = {
  profileImageUrl: PropTypes.string
};
```

```javascript
const Username = ( { name, screenName} ) => {
  return (
    <div> {name} | {screenName} </div>
  )
};

Username.propTypes = {
  name: PropTypes.string,
  screenName: PropTypes.string
};
```

## 02. Children 
`Children` is a special `prop` that can be passed from the owners to the components defined inside their render method. Children is described as `opaque` because it is a property that does not tell anything about the value it contains.

```html
<div id="root" />
<script crossorigin src="https://unpkg.com/react@16.2.0/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16.2.0/umd/react-dom.development.js"></script>
<script crossorigin src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
<script crossorigin src="https://unpkg.com/prop-types@15.6.0/prop-types.js"></script>
<script type="text/babel" src="Button.js"></script>
<script type="text/babel" src="Buttons.js"></script>

<script type="text/babel">
  ReactDOM.render(<Buttons />, document.getElementById('root'));
</script>
```

```javascript
const Button = ({ children }) => {
  return ( <button className="btn">{children}</button> )
};

Button.propType = {
  children: PropTypes.array
};
``` 

```javascript
const Buttons = () => (
  <div>
    <Button><span>Click me first</span></Button>
    <Button><span>Click me last</span></Button>
  </div>
);
```

## 03 Container and presentational pattern
React components typically contain a mix of `logic` and `presentation`. By logic we are referring to anything that is unrelated to the user interface, such as API call, data manipulation, and event handlers. The container and presentational pattern helps us to separate the two. In this patter, every component is split into two, each with clear responsibility. The container component knows everything about the the login and the presentation about the user interface. 

```html
<div id="root" />
<script crossorigin src="https://unpkg.com/react@16.2.0/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16.2.0/umd/react-dom.development.js"></script>
<script crossorigin src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
<script crossorigin src="https://unpkg.com/prop-types@15.6.0/prop-types.js"></script>
<script type="text/babel" data-presets="es2015,react" src="GeoLocation.js"></script>
<script type="text/babel" data-presets="es2015,react" src="GeoLocationContainer.js"></script>
<script type="text/babel" data-presets="es2015,react" src="Loading.js"></script>
<script type="text/babel" data-presets="es2015,react" src="LoadingContainer.js"></script>

<script type="text/babel">
  ReactDOM.render(<GeoLocationContainer />, document.getElementById('root'));
</script>
```

```javascript
class GeoLocationContainer extends React.Component {
  state = {
    longitude: null,
    latitude: null,
  };

  handleLocation = (position) => {
    const { longitude, latitude } = position.coords;
    this.setState({ longitude, latitude, });
  };

  handleError = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  componentDidMount () {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.handleLocation, this.handleError, options);
    }
  }

  render (){
    return (
      <div>{ !this.state.latitude ?
          <LoadingContainer text={"Loading"}/>
        : <GeoLocation location={{...this.state}}/> }</div>
    )
  }
}
```

```javascript
const GeoLocation = ({ location }) => {
  const { longitude, latitude } = location;
  return (<div> Longitude: {longitude} : Latitude: {latitude} </div>)
};

GeoLocation.propTypes = {
  location: PropTypes.object
};
```

```javascript
class LoadingContainer extends React.Component {
  state = {
    text: this.props.text,
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {
    text: 'Loading',
    speed: 300,
  };

  componentDidMount() {
    const { text, speed } = this.props;
    const stopper = text + '...';

    this.interval = window.setInterval(() => {
      this.state.text === stopper
        ? this.setState(() => ({ text: this.props.text }))
        : this.setState((prevState) => ({ text: prevState.text + '.' }))
    }, speed)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return(<Loading text={this.state.text} />)
  }
}
```

```javascript
const Loading = ( {text} ) => {
  return (<div>{text}</div>)
};
```

