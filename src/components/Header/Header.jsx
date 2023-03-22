import BackgroundHeader from '../../assets/fundo-bonito.jpg';
import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <div className={ styles.intro }>
        <img
          src={ BackgroundHeader }
          className={ styles.imgHeader }
          alt="imagem header"
        />
        <div className={ styles.title }>
          <h1>Blogspot</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
