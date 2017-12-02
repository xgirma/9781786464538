class SpreadAttributes extends React.Component {
    render () {
        const foo = { id: 'bar' };
        return (<div {...foo} />)
    }
}

ReactDOM.render(<SpreadAttributes />, mountNode);