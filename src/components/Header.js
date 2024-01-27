import { Link } from "react-router-dom";
import Title from "./Title"
const Header = () => {
  return (
    <div className="flex items-center justify-between px-1 bg-slate-50">
      <Title />
      <div className="flex">
        <ul className="flex mx-1">
          <li className="mx-2">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2">
            <Link to="/about">About</Link>
            </li>
          <li className="mx-2">
            <Link to="/contact">Contact</Link>
            </li>
          <li className="mx-2">
            <Link to="/cart">Cart</Link>
            </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;