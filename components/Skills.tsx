import React from "react";
import Section from "./Section";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiSpring,
  SiNodeDotJs,
  SiOracle,
  SiFirebase,
} from "react-icons/si";

import styled from "styled-components";
import commonStyle from "../styles/CommonStyle";

const Container = styled.div`
  ${commonStyle.grid}

  row-gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
`;

const Subtitle = styled.h3`
  color: ${({ theme }) => theme.colors.first};
  margin-bottom: ${({ theme }) => theme.margins.mb3};
`;

const Name = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-right: ${({ theme }) => theme.margins.mb2};
  margin-bottom: ${({ theme }) => theme.margins.mb3};
  padding: 0.25rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.first};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Img = styled.div`
  & img {
    border-radius: 0.5rem;
  }
`;

const Box = styled.div``;

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <Container>
        <Box>
          <Subtitle>Front End</Subtitle>
          <Name>
            <SiHtml5 /> HTML
          </Name>
          <Name>
            <SiCss3 />
            CSS
          </Name>
          <Name>
            <SiJavascript />
            JavaScript
          </Name>
          <Name>
            <SiTypescript />
            TypeScript
          </Name>
          <Name>
            <SiReact />
            React
          </Name>
          <Name>
            <SiReact />
            React Native
          </Name>
          <Name>Next.js</Name>

          <Subtitle>BackEnd</Subtitle>
          <Name>
            <SiSpring />
            Spring
          </Name>
          <Name>
            <SiNodeDotJs />
            Node.js
          </Name>
          <Name>
            <SiOracle />
            Oracle
          </Name>
          <Name>
            <SiFirebase />
            Firebase
          </Name>
        </Box>

        <Img>
          <img src="./img/skill.jpg" alt="" />
        </Img>
      </Container>
    </Section>
  );
}

export default Skills;
