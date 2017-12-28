const Profile = ({ user }) => (
  <div>
    <Picture profileImageUrl={user.image} />
    <Username name={user.name} screenName={user.screenname} />
  </div>
);

Profile.propTypes = {
  user: PropTypes.object
};
