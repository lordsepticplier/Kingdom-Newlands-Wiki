import { Link } from 'react-router-dom';
import './Content.css';
import greedlingIcon from './images/Greedling_icon.png'
import standardIcon from './images/Standard_Horse_icon.png'
import archerIcon from './images/Archer_icon.png'
import wallIcon from './images/Wall_icon.png'

function Content() {
  
   
      return (
        <div className='box'>
          <Link to="/Enemies" id="greed"><img src={greedlingIcon} width="120px" height="auto" alt="logo" /></Link>
          <Link to="/Mounts" id="stand"><img src={standardIcon} width="120px" height="auto" alt="logo" /></Link>
          <Link to="/Units" id="archer"><img src={archerIcon} width="120px" height="auto" alt="logo" /></Link>
          <Link to="/Buildings" id="wall"><img src={wallIcon} width="120px" height="auto" alt="logo" /></Link>
          
          <Link to="/Enemies" id="greedW"><h2>Enemies</h2></Link>
          <Link to="/Mounts" id="standW"><h2>Mounts</h2></Link>
          <Link to="/Units" id="archerW"><h2>Units</h2></Link>
          <Link to="/Buildings" id="wallW"><h2>Buildings</h2></Link>
        </div>   
      );
  }
  
  export default Content;