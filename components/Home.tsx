import React from "react";
import Section from "./Section";

import styled from "styled-components";
import commonStyle from "../styles/commonStyle";

const Container = styled.div`
  ${commonStyle.grid}

  height: calc(100vh - ${({ theme }) => theme.height.header});
`;

const Title = styled.h1`
  align-self: flex-end;
  font-size: ${({ theme }) => theme.fontSizes.big};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.2;

  & span {
    text-shadow: 0 20px 25px rgba(0, 0, 0, 0.5);
  }
`;

const Scroll = styled.div`
  align-self: flex-end;
  padding-bottom: ${({ theme }) => theme.margins.mb4};

  & a {
    writing-mode: vertical-lr;
    transform: rotate(-180deg);
    color: ${({ theme }) => theme.colors.white};
  }
`;

const ScrollLink = styled.a``;

function Home() {
  return (
    <Section id="home">
      <Container>
        <Title>
          <span>안녕하세요</span>
          <br />
          <span>프론트엔드 개발자</span>
          <br />
          <span>강성규 입니다.</span>
        </Title>

        <Scroll>
          <ScrollLink href="#about">
            <i className="bx bx-up-arrow-alt"></i>Scroll down
          </ScrollLink>
        </Scroll>
      </Container>
    </Section>
  );
}

export default Home;
