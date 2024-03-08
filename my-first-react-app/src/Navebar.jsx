import {Side1} from "./Side1";
import {Side3} from "./Side3";
import { Sside3 } from "./Sside3";

export const Navbar = (props) => {

    return (
      <nav className="navbar">
        <div className="nav-column" style={{width:"30%"}}>
          <Side1/>
          <Side1 title="Left Pane Middle (splitter propagation)"/>
          <Side1 title="Left Pane Bottom (splitter propagation)"/>
        </div>

        <div className="nav-column" style={{width:"60%"}}>
          <div className="nav-column" style={{height:"775px"}}>
            <a>Middle Pane</a>
          </div>
        </div>

        <div className="nav-column" style={{width:"30%"}}>
          <div style={{display:"flex"}}> 
              <Sside3 title="Right Pane Upper-Left"/>
              <Sside3 title="Right Pane Upper-Right"/>
          </div>
          <div>
              <Side3 title="Right Pane Bottom"/>
          </div>
        </div>

        </nav>
    );
  };

// export default Navbar   