import React from "react";
import Section from "./Section";

import styled from "styled-components";
import commonStyle from "../styles/commonStyle";

const Container = styled.div`
  ${commonStyle.grid}

  justify-items: center;
  row-gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Img = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;

  & img {
    border-radius: 0.5rem;
  }

  &:hover div {
    bottom: 0;
  }

  @media (min-width: 768px) {
  }
`;

const Link = styled.div`
  position: absolute;
  bottom: -100%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(20, 20, 20, 0.23);
  border-radius: 0.5rem;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: 0.3s;
  color: ${({ theme }) => theme.colors.white};
`;

const LinkName = styled.a`
  color: ${({ theme }) => theme.colors.first};
  margin-bottom: ${({ theme }) => theme.margins.mb1};
`;

const LinkTtile = styled.div`
  margin-bottom: ${({ theme }) => theme.margins.mb1};
`;

const LinkDescription = styled.div`
  margin-bottom: ${({ theme }) => theme.margins.mb1};
`;

function Portfolio() {
  return (
    <Section id="portfolio" title="Portfolio">
      <Container>
        <Img>
          <img src="./img/movie_home.png" alt="" />
          <Link>
            <LinkTtile>KAN'S MOVIE</LinkTtile>
            <LinkDescription>React + TypeScript</LinkDescription>
            <LinkName href="https://kansmovie.netlify.app/" target="_blank">
              Go to Web site
            </LinkName>
            <LinkName
              href="https://github.com/sk97kang/Kan-s-Movie"
              target="_blank"
            >
              <i className="bx bxl-github"></i> Go to Github
            </LinkName>
          </Link>
        </Img>
        <Img>
          <img src="./img/wed_home.png" alt="" />
          <Link>
            <LinkTtile>We Developer</LinkTtile>
            <LinkDescription>React + TypeScript + Next</LinkDescription>
            <LinkName href="https://wedeveloper.netlify.app/" target="_blank">
              Go to Web site
            </LinkName>
            <LinkName
              href="https://github.com/sk97kang/we-developer-next"
              target="_blank"
            >
              <i className="bx bxl-github"></i> Go to Github
            </LinkName>
          </Link>
        </Img>
        <Img>
          <img src="./img/note_home.png" alt="" />
          <Link>
            <LinkTtile>KAN'S NOTE</LinkTtile>
            <LinkDescription>React + TypeScript</LinkDescription>
            <LinkName href="https://kansnote.netlify.app/" target="_blank">
              Go to Web site
            </LinkName>
            <LinkName
              href="https://github.com/sk97kang/Kan-s-Note"
              target="_blank"
            >
              <i className="bx bxl-github"></i> Go to Github
            </LinkName>
          </Link>
        </Img>
        <Img>
          <img src="./img/themovie_home.png" alt="" />
          <Link>
            <LinkTtile>THE MOVIE</LinkTtile>
            <LinkDescription>React + Next + TypeScript</LinkDescription>
            <LinkName
              href="https://github.com/sk97kang/the-movie"
              target="_blank"
            >
              <i className="bx bxl-github"></i> Go to Github
            </LinkName>
          </Link>
        </Img>
      </Container>
    </Section>
  );
}

export default Portfolio;
