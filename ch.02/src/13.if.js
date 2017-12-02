function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    let button;

    if (isLoggedIn) {
        button = <LogoutButton />
    }

    return <div> {button} </div>;
}