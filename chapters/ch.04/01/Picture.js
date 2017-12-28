const Picture = ( { profileImageUrl }) => {
  return (
    <div> <img src={profileImageUrl}/> </div>
  )
};

Picture.propTypes = {
  profileImageUrl: PropTypes.string
};
