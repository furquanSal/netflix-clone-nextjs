import styles from '../../styles/Footer.module.scss';
import { Github, Linkedin, Twitter } from '../../utils/icons';
import { IconType } from 'react-icons';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        Made by{' '}
        <a href='#' target='_blank' rel='noreferrer'>
          <b>Mohammed Junaid Uddin</b>
        </a>
      </p>
      <div>
        <a href='https://www.linkedin.com/in/md-junaid-uddin-b98745213/' className={styles.icon} target='_blank' rel='noreferrer'>
          <Linkedin />
        </a>
        <a href='https://twitter.com/MDJUNAIDUDDIN6' className={styles.icon} target='_blank' rel='noreferrer'>
          <Twitter />
        </a>
        {/* <a href='https://github.com/ayushiee' className={styles.icon} target='_blank' rel='noreferrer'>
          <Github />
        </a> */}
      </div>
    </div>
  );
}
