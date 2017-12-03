function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    let button;

    if (isLoggedIn) {
        button = <LogoutButton />
    } else {
        button = <LoginButton />
    }

    return <div> {button} </div>;
}