const Username = ( { name, screenName} ) => {
  return (
    <div> {name} | {screenName} </div>
  )
};

Username.propTypes = {
  name: PropTypes.string,
  screenName: PropTypes.string
};
