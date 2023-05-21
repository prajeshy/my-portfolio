import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
} from 'react-icons/di';
import {
  SiTypescript,
  SiRedux,
  SiSocketDotIo,
  SiCplusplus,
  SiGnubash,
  SiAmazonaws,
  SiJava,
  SiHackaday,
  SiPython,
  SiKalilinux,
  SiMacos,
  SiWindows,
} from 'react-icons/si';

import {
  FcLinux,
} from 'react-icons/fc';

import {
  AiFillBug,
  AiFillWindows,
  AiFillMacCommand,
} from 'react-icons/ai';

import {
  GrVulnerability,
} from 'react-icons/gr';

import {
  MdSecurity,
} from 'react-icons/md';

import {
  GiCyberEye,
} from 'react-icons/gi';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <SiJava />
      </li>
  
    
      
      <li className={s.techIcon}>
        <SiCplusplus />
      </li>
      <li className={s.techIcon}>
        <SiPython />
      </li>
      <li className={s.techIcon}>
        <SiGnubash />
      </li>
      <li className={s.techIcon}>
        <SiKalilinux />
      </li>
      <li className={s.techIcon}>
        <AiFillBug />
      </li>
      <li className={s.techIcon}>
        <MdSecurity />
      </li>
      <li className={s.techIcon}>
        <SiMacos />
      </li>
      <li className={s.techIcon}>
        <SiHackaday />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <GiCyberEye/>
      </li>
      <li className={s.techIcon}>
        <SiWindows />
      </li>
    </ul>
  );
};

export default TechSkills;