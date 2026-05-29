import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404 - Sidan hittades inte</h1>
      <p>Sidan du letar efter finns inte.</p>
      <Link to="/">Gå tillbaka till startsidan</Link>
    </div>
  );
}

export default NotFound;
