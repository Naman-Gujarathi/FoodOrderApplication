import { LOGO_URL } from "../utlis/constants";

 export const HeaderComponenet = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img className ="logo" src= {LOGO_URL}></img>
        </div>
        <div className="nav-item">
          <ul>
              <li>Home</li>
              <li>About</li>
              <li>Login</li>
          </ul>  
        </div>
      </div>
    );
  };

  export default HeaderComponenet;