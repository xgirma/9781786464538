const Button = ({ children }) => {
  return ( <button className="btn">{children}</button> )
};

Button.propType = {
  children: PropTypes.array
};
