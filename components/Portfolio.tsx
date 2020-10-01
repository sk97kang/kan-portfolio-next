import React from "react";
import Section from "./Section";

import styled from "styled-components";
import commonStyle from "../styles/CommonStyle";

const Container = styled.div`
  ${commonStyle.grid}

  justify-items: center;
  row-gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
  }
`;

const Img = styled.div`
  position: relative;
  overflow: hidden;

  & img {
    border-radius: 0.5rem;
  }

  &:hover div {
    bottom: 0;
  }
`;

const Link = styled.div`
  position: absolute;
  bottom: -100%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0.5rem;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: 0.3s;
`;

const LinkName = styled.a`
  color: ${({ theme }) => theme.colors.dark};
`;

function Portfolio() {
  return (
    <Section id="portfolio" title="Portfolio">
      <Container>
        <Img>
          <img src="./img/work1.jpg" alt="" />
          <Link>
            <LinkName href="#">View details</LinkName>
          </Link>
        </Img>
        <Img>
          <img src="./img/work2.jpg" alt="" />
          <Link>
            <LinkName href="#">View details</LinkName>
          </Link>
        </Img>
        <Img>
          <img src="./img/work3.jpg" alt="" />
          <Link>
            <LinkName href="#">View details</LinkName>
          </Link>
        </Img>
        <Img>
          <img src="./img/work4.jpg" alt="" />
          <Link>
            <LinkName href="#">View details</LinkName>
          </Link>
        </Img>
        <Img>
          <img src="./img/work5.jpg" alt="" />
          <Link>
            <LinkName href="#">View details</LinkName>
          </Link>
        </Img>
        <Img>
          <img src="./img/work6.jpg" alt="" />
          <Link>
            <LinkName href="#">View details</LinkName>
          </Link>
        </Img>
      </Container>
    </Section>
  );
}

export default Portfolio;
