function Greeting(props) {
    return (
        <div>
            { props.isLoggedIn ? <LogoutButton /> : <LoginButton />}
        </div>
    );
}