import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
// import { email } from '@config';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Wali Ullah.</h2>;
  const three = <h3 className="big-heading">I turn code into beautiful functional things.</h3>;
  const four = (
    <>
      <p>
        I'm a proactive &amp; enthusiastic computer engineer who's seeking challenging projects.
        I have recently started my professional career at{' '}
        <a href="https://www.mckinsey.com/capabilities/mckinsey-digital/how-we-help-clients" target="_blank" rel="noreferrer">
          McKinsey Digital
        </a>{' '}
        as a Fellow Engineer after graduating from{' '}
        <a href="https://www.bme.hu/?language=en" target="_blank" rel="noreferrer">
          BME
        </a>{' '}
        where I did my bachelors in Computer Science Engineering.
        Previously, I was a Developer Intern at{' '}
        <a href="https://corporate.exxonmobil.com/locations/hungary" target="_blank" rel="noreferrer">
          Exxonmobil
        </a>{' '}
        where I did Front-End, DevOps, and QA.
      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="mailto:wali6985@gmail.com?subject=Hello%20there&body=Hi%2C%20Wali%0A"
      target="_blank"
      rel="noreferrer"
    >
      Reach out to me!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
