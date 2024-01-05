import logoHeader from '../../../../public/troll-face.png '
import Image from 'next/image';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        className={styles['header--image']}
        src={logoHeader}
        alt="logo header"

      ></Image> 
      <h2 className={styles["header--title"]}>Meme Generator</h2>
      <h4 className={styles["header--project"]}>React Course - Project 3</h4>
    </header>
  );
};

export default Header;
