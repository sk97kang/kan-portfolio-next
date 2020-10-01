import React from "react";
import Section from "./Section";

import styled from "styled-components";
import commonStyle from "../styles/CommonStyle";

const Container = styled.div`
  ${commonStyle.grid}

  justify-items: center;
  row-gap: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    text-align: initial;
    padding: 4rem 0;
  }
`;

const Img = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  width: 120px;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  overflow: hidden;

  & img {
    width: 100px;
  }

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;

    & img {
      width: 165px;
    }
  }
`;

const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  color: ${({ theme }) => theme.colors.first};
  margin-bottom: ${({ theme }) => theme.margins.mb1};
`;

const Text = styled.p`
  margin-bottom: ${({ theme }) => theme.margins.mb4};
`;

const Profession = styled.span`
  display: block;
  margin-bottom: ${({ theme }) => theme.margins.mb4};
`;

const Social = styled.div``;

const SocialIcon = styled.a`
  font-size: 1.4rem;
  margin: 0 ${({ theme }) => theme.margins.mb1};

  &:hover {
    color: ${({ theme }) => theme.colors.first};
  }
`;

function About() {
  return (
    <Section id="about" title="About">
      <Container>
        <Img>
          <img src="./img/perfil.png" alt="" />
        </Img>

        <div>
          <Subtitle>강성규 입니다.</Subtitle>
          <Profession>Front End Developer</Profession>
          <Text>
            안녕하세요. 강성규 입니다. 프론트 엔드 주니어 개발자 입니다.
          </Text>

          <Social>
            {/* <SocialIcon href="#" className="about__social-icon">
              <i className="bx bxl-linkedin"></i>
            </SocialIcon> */}
            <SocialIcon href="https://github.com/sk97kang" target="_blank">
              <i className="bx bxl-github"></i>
            </SocialIcon>
            {/* <SocialIcon href="#" className="about__social-icon">
              <i className="bx bxl-dribbble"></i>
            </SocialIcon> */}
          </Social>
        </div>
      </Container>
    </Section>
  );
}

export default About;
