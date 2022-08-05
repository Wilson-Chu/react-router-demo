import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const Contact = () => {
  return (
    <div>
      <Alert variant="success">
        <h1>Hello from Contact!</h1>
      </Alert>
      <div className="redirect-btn">
        <Link to="/">
          <Button variant="outline-primary">To Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
