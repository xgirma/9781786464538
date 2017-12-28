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
