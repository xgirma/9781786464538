class Secret extends React.Component {
    constructor(props){
        super(props)
    }

    get canShowSecret() {
        const { dataIsReady, isAdmin, userHasPermissions } = this.props;
        return dataIsReady && ( isAdmin || userHasPermissions);
    }

    render() {
        return (
            <div>
                {this.canShowSecret && <Secretdata />}
            </div>
        )
    }
}
