import { Link, useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
  let { data, status } = useRouteError();

  let message = "Oops! Something went wrong";
  if (data) {
    message = data.message;
    status = status || "";
  }

  const navigate = useNavigate();

  const x = 10;

  return (
    <div className="text-center">
      <p className="display-2">{message}</p>
      {status && <p>Status : {status}</p>}
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
