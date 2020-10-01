import React, { ReactNode } from "react";

import styled, { css } from "styled-components";
import commonStyle from "../styles/commonStyle";

const Container = styled.section<{ styleName: string }>`
  ${commonStyle.section}

  ${({ styleName }) => {
    if (styleName === "home") {
      return css`
        position: relative;
        overflow: hidden;
        background: url("./img/home_bg.jpg");
        background-size: cover;
        background-position: center center;
      `;
    } else if (styleName === "portfolio") {
      return css`
        background-color: ${({ theme }) => theme.colors.white};
      `;
    }
  }}
`;

const Title = styled.h2`
  ${commonStyle.sectionTitle}
`;

type Props = {
  id: string;
  title?: string;
  children: ReactNode;
};

function Section({ id, title, children }: Props) {
  return (
    <Container id={id} styleName={id}>
      <>
        {title && <Title>{title}</Title>}
        {children}
      </>
    </Container>
  );
}

export default Section;
