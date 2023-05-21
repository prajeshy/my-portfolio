import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
          Hey There, I am{' '}
        <span className={s.purple}>Prajesh Yeotikar </span>
        from <span className={s.purple}> India.</span>
        <br />
        A passionate B.Tech student specializing in Computer Science Engineering at Manipal University Jaipur.
        <br /> With a strong affinity for the world of penetration testing, I find myself immersed in the exciting domains of web and API security.
        <br />
        <br />
        My fascination with penetration testing stems from the thrill of uncovering vulnerabilities and enhancing the resilience of digital systems. I thrive on the challenge of identifying potential weaknesses in web applications and APIs, helping organizations fortify their defenses against cyber threats.
        <br />
        <br />
        What sets me apart is my love for bug hunting. I approach each project with enthusiasm and a keen eye for detail, meticulously searching for vulnerabilities that others might overlook. By simulating real-world attacks, I aim to expose weaknesses and provide comprehensive recommendations for securing digital assets.
        <br />
        <br />
        In the dynamic world of cybersecurity, I understand the importance of staying up-to-date with the latest techniques and tools. I am committed to continuous learning and actively participate in bug bounty programs and online communities. This helps me sharpen my skills and expand my knowledge, ensuring that I can deliver effective solutions to my clients.
        <br />
        <br />
        Let's Collaborate!

If you're looking for a passionate and dedicated penetration tester to assess the security of your web applications or APIs, I'd love to connect with you. Feel free to explore my portfolio to learn more about my projects and achievements. Together, we can strengthen your digital defenses and safeguard your valuable assets.


      
      </p>

      
    </div>
  );
};

export default AboutTextCard;