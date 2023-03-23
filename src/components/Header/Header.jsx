import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <div className={ styles.title }>
        <h1>Blogspot</h1>
      </div>
    </header>
  );
}

export default Header;
