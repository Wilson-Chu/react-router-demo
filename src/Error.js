import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Error = () => {
  return (
    <div>
      <Alert variant="warning">
        <h2>Error 404</h2>
        <p>Page Note Found</p>
      </Alert>
      <div className="redirect-btn">
        <Link to="/">
          <Button variant="outline-primary">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
