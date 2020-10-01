import React, { ReactNode } from "react";

import styled from "styled-components";

const Container = styled.div`
  max-width: 1024px;
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
  width: calc(100% - 2rem);
  margin-left: ${({ theme }) => theme.margins.mb2};
  margin-right: ${({ theme }) => theme.margins.mb2};

  @media (min-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

type Props = {
  children: ReactNode;
};

function Grid({ children }: Props) {
  return <Container>{children}</Container>;
}

export default Grid;
