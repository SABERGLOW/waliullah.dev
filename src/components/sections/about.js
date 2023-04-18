import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--lightest-mimir-green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    //background-color: var(--lightest-mimir-green);
    background-color: white;
    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--mimir-green);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--lightest-mimir-green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'HTML & CSS',
    'React',
    'Next.js',
    'Angular',
    'Azure',
    'Firebase',
    'Git',
    'Kotlin',
    'Java',
    'C/C++',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello there! My name is Wali and I like to code beautiful and functional things for
              the web. In the evenings, you can find me around the streets of Budapest, or alongside
              the Danube river,
              <a href="https://www.instagram.com/sardarwaliullah/">behind the lens</a>,{' '}
              photographing the city and its life through a unique perspective. I also love music,
              and building computers.
            </p>
            <p>
              My interest in Computers and Robotics started back in 2015 when I built and programmed
              my first modular robot using RobotC and a Lego NXT 2.0 Kit. The robots that I built
              and programmed as a novice won several of the national competitions that I
              participated in, and it only ignited my passion for learning new programming languages
              and technologies even further.
            </p>

            <p>
              Fast-forward to today, I have completed my bachelors in Computer Science Engineering
              from Budapest University of Technology and Economics,{' '}
              <a href="https://www.bme.hu/?language=en"> BME </a>, class of 2023. I’ve had the
              privilege of working at{' '}
              <a href="https://www.mckinsey.com/">world’s leading consulting firm</a>,{' '}
              <a href="https://corporate.exxonmobil.com/">one of the Fortune 500s</a>, teaching Java
              and Python at an{' '}
              <a href="https://www.hkcodingcamp.com/">online coding education start-up</a>, and
              mentoring foreign scholarship students for{' '}
              <a href="https://shmentor.hu/"> Hungarian Union of Students</a>.
            </p>

            <p>
              My main focus these days is driving and innovating the digital transforation
              of our clients by leveraging the latest technologies and harnessing the power of data
              at{' '}
              <a href="https://www.mckinsey.com/capabilities/mckinsey-digital/how-we-help-clients">McKinsey Digital</a>.
            </p>

            <p>Here are a few technologies I’ve been working with/learning about recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
