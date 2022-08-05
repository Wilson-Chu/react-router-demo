import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const Profile = () => {
  return (
    <div>
      <Alert variant="success">
        <h1>Hello from Profile!</h1>
      </Alert>
      <div className="redirect-btn">
        <Link to="/contact">
          <Button variant="outline-primary">To Contact</Button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
