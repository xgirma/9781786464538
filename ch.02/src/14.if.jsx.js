function Greeting(props) {
    return <div> { props.isLoggedIn && <LogoutButton /> } </div>;
}