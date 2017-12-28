const GeoLocation = ({ location }) => {
  const { longitude, latitude } = location;
  return (<div> Longitude: {longitude} : Latitude: {latitude} </div>)
};

GeoLocation.propTypes = {
  location: PropTypes.object
};
