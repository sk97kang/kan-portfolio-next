import React from "react";

import styled from "styled-components";
import commonStyle from "../styles/commonStyle";

const FooterContainer = styled.footer`
  ${commonStyle.section}

  background-color: ${({ theme }) => theme.colors.dark};
`;

const Container = styled.div`
  ${commonStyle.grid}

  row-gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.normal};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.margins.mb2}; ;
`;

const Link = styled.a`
  padding: 0.25rem 0;

  &:hover {
    color: ${({ theme }) => theme.colors.first};
  }
`;

const Social = styled.a`
  font-size: 1.4rem;
  margin-right: ${({ theme }) => theme.margins.mb1};
  &:hover {
    color: ${({ theme }) => theme.colors.first};
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <div className="footer__data">
          <Title>강성규</Title>
          <p className="footer__text">
            I'm FrontEnd Developer 강성규 and this is my website
          </p>
        </div>

        <div className="footer__data">
          <Title>EXPLORE</Title>
          <ul>
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#skills">Skills</Link>
            </li>
            <li>
              <Link href="#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="#Contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer__data">
          <Title>FOLLOW</Title>
          {/* <Social href="#">
            <i className="bx bxl-facebook"></i>
          </Social>
          <Social href="#">
            <i className="bx bxl-instagram"></i>
          </Social>
          <Social href="#">
            <i className="bx bxl-twitter"></i>
          </Social> */}
          <Social href="https://github.com/sk97kang" target="_blank">
            <i className="bx bxl-github"></i>
          </Social>
        </div>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
