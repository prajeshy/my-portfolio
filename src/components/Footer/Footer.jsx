import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import { AiTwotoneMail } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3>Designed and Developed by Prajesh Yeotikar</h3>
        </div>

        <div className={s.copyright}>
          <h3>Copyright © {year} prajesh.me</h3>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/prajeshy"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className={s.socialLink}>
            <a
              href="mailto:prajesh.infosec@gmail.com"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <AiTwotoneMail />
            </a>
          </li>
            <li>
              <a
                href="https://www.instagram.com/exploitjunkie"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/prajesh_y"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegramPlane />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/prajeshy"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
