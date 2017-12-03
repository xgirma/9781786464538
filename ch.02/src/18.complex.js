function Secret (props) {
    return (
        <div>
            { props.dataIsReady && ( props.isAdmin || props.userHasPermissions ) && <Secretdata /> }
        </div>
    )
}
