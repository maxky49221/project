import { Link } from "react-router-dom"

const Nevbar = ({ header }) => {
  return (
    <div className="header">
      <h1 className="text">{header}</h1>
      <div>
        <Link to="/login" className="login">Login</Link>
        <Link to="/regis" className="login">Register</Link>
      </div>
    </div>
  );
};

export default Nevbar;
