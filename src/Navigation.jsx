import { Outlet, Link } from "react-router-dom"
import './Navigation.css';

function Navigation() {
  return (<div>

    <div className="search">
      <Link to='/'>
        <p>DEV@Deakin</p>
      </Link>
      <input
        text="test"
        placeholder="Search..."
      />

      <p>POST</p>
      <Link to='/login'>
        <p>LOGIN</p>
      </Link>

    </div>


    <Outlet />
  </div>)

}
export default Navigation