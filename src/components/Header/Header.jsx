import './Header.scss';
import cartierLogo from '../../assets/images/cartier-image.png';

function Header(){
    

    return(
          <header className='header'>
             <img src={cartierLogo} alt="logo" />

            <nav className='header__nav'>
                <ul className='header__list'>
                    <li className='header__item'>About</li>
                    <li className='header__item'>Pricing</li>
                    <li className='header__item'>How it works</li>
                </ul>

            </nav>

          </header> 
    )
}
export default Header;