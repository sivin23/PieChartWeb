import {BiMenu} from 'react-icons/bi';
import {Logo} from '../assets/img';


function Navbar({asideMenuActive, menuActiveFunction}) {
  return (
    <div className='w-100 d-flex flex-row justify-content-around m-0 p-0'>
        <div className='menu-button'>
          <button className='btn' type='button' onClick={ asideMenuActive ? ()=>menuActiveFunction(false) : ()=>menuActiveFunction(true) }><BiMenu size="30px" /></button>
        </div>
        <div className='logo'>
          <img src={Logo} alt='logo' width="300px" />
        </div>
    </div>
  )
}

export default Navbar