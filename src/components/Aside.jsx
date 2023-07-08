
import {BiX} from 'react-icons/bi';

function Aside({asideMenuActive, menuActiveFunction}) {
  return (
    <div className={`container position-fixed flex-column text-center justify-content-start align-items-start aside-menu ${asideMenuActive ? "visible" : "notvisible"}`} >
      <div className="close-btn " onClick={ asideMenuActive ? ()=>menuActiveFunction(false) : ()=>menuActiveFunction(true) } >
        <span><BiX size="40px" /></span>
      </div>
      <div>
        <ul className='aside-menu-list'>
          <li><a href="/">Home</a></li>
          <li><a href="/Services">Services</a></li>
          <li><a href="/Contact">Contact Us</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Aside