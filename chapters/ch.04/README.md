# Chapter 4 - Compose All the Things

## Communication between components 
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