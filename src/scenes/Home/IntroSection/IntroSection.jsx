import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import {
  BsInstagram,
} from 'react-icons/bs';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
            I wield the art of digital exploration, revealing hidden pathways and securing fortresses. <br />
            With two years of expertise in the realm of Bug Bounty Hunting, <br /> 
            I've honed my skills in uncovering vulnerabilities and bugs within Web Apps and APIs. 
            </p>

            <p>
              My skills include conducting{' '}
              <i>
                <b className={s.purple}>
                Vulnerability Assessment and Penetration Testing (VAPT),<br />
                Proficient Bug Hunting, Web Application Penetration Testing, API Penetration Testing 
                </b>
              </i>
              <br />
              Experienced in risk mitigation and providing comprehensive security recommendations.
              
            </p>

            <p>
            My field of interest revolves around securing new   <i>
                <b className={s.purple}> Technologies and Products</b>
              </i>, <br />ensuring their resilience against potential vulnerabilities and threats.
              
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/prajeshy"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.facebook.com/Snaychuk"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="facebook"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://instagram.com/exploitjunkie"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="instagram"
            >
              <BsInstagram />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/prajeshy"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
