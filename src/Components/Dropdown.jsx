import { Link } from "react-router-dom";
import useAuthUtilite from "../Hooks/useAuthUtilite";
const Dropdown = () => {
  const { user, logOut } = useAuthUtilite();
  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="btn m-1">
        <div className="avatar online">
          <div className="w-10 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <h4>{user.email}</h4>
        </li>
        <li>
          <a>Profile</a>
        </li>
        <li>
          <Link to="/user-booking"> Order</Link>
        </li>
        <li>
          <button className="text-red-500" onClick={logOut}>
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
