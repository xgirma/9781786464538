function Selection(props) {
    return (
        <Choose>
            <When condition={props.first}>
                <span>if</span>
            </When>
            <When condition={props.second}>
                <span>else if</span>
            </When>
            <Otherwise>
                <span>else</span>
            </Otherwise>
        </Choose>
    )
}