class GeoLocationContainer extends React.Component {
  state = {
    longitude: null,
    latitude: null,
  };

  handleLocation = (position) => {
    const { longitude, latitude } = position.coords;
    this.setState({ longitude, latitude, });
  };

  handleError = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  componentDidMount () {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.handleLocation, this.handleError, options);
    }
  }

  render (){
    return (
      <div>{ !this.state.latitude ?
          <LoadingContainer text={"Loading"}/>
        : <GeoLocation location={{...this.state}}/> }</div>
    )
  }
}
