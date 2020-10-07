import React from "react";
import Section from "./Section";

import styled from "styled-components";
import commonStyle from "../styles/commonStyle";

const Container = styled.div`
  ${commonStyle.grid}

  justify-items: center;
  row-gap: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
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
  background-color: #9d8883;
  border-radius: 50%;
  overflow: hidden;

  & img {
    width: 100px;
    border-radius: 50%;
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
          <img src="./img/profile.png" alt="" />
        </Img>

        <div>
          <Subtitle>꾸준한 개발자 강성규 입니다.</Subtitle>
          <Profession>FrontEnd Developer</Profession>
          <Text>
            20살때부터 생각만하던걸 구현할 수 있는 프로그램의 매력에 빠져 독학을
            시작하였습니다. 알고리즘, 자료구조, CS 공부 등 프로그램 베이스
            공부를 시작으로 최근에 React를 접하게되어 React, React Native를
            이용해서 웹/앱을 만들어보고있습니다. 현재는 부족한 부분이 많지만
            꾸준히 공부하여 차근 차근 기초부터 실력을 올리는 꾸준한 개발자가
            되겠습니다.
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
