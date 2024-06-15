import { Link, useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  const x = 10;

  return (
    <div className="text-center">
      <p className="display-2">Oops! Something went wrong</p>
      <p>
        Click <Link to="/"> here</Link> to go to the application{" "}
      </p>
      <button
        onClick={() => navigate(`/`, { state: { x } })}
        className="btn btn-primary"
      >
        Go Back
      </button>
    </div>
  );
}

export default ErrorPage;
