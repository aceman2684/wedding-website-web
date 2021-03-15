import React from 'react';
import weddingLogo from '../../assets/svg/wedding-logo.svg';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className="d-none d-lg-block vw-100 bg-light py-3 text-center border-bottom">
      <a className="navbar-brand" href="/">
        <img src={weddingLogo} alt="Wedding Logo" className={styles.header__logo} />
      </a>
    </div>
  );
}
