import React from 'react';
import styles from './Header.module.scss';
import UserImage from '../../../images/header/user.png';
import HamburgerImage from '../../../images/header/hamburger.png';

const Header = () => {
  return (
   <div>
        <header className={styles.header}></header>
        <button type='button'>
            <img src={UserImage} alt='Authorization'></img>
        </button>

        <button type='button'>
        <img src={HamburgerImage} alt='Authorization'></img>
        </button>
   </div> 
  )
}

export default Header