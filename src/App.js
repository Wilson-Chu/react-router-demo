import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const App = () => {
  return (
    <div>
      <Alert>
        <h1>Hello from Home!</h1>
      </Alert>
      <div className="redirect-btn">
        <Link to="/profile">
          <Button variant="outline-primary">To Profile</Button>
        </Link>
      </div>
    </div>
  );
};

export default App;
