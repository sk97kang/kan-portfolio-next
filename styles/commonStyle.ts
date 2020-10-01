import { css } from "styled-components";

const grid = css`
  max-width: 1024px;
  display: grid;
  grid-column-gap: 2rem;
  width: calc(100% - 2rem);
  margin-left: ${({ theme }) => theme.margins.mb2};
  margin-right: ${({ theme }) => theme.margins.mb2};

  @media (min-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const section = css`
  padding: 3rem 0;

  @media (min-width: 768px) {
    padding-top: 4rem;
  }
`;

const sectionTitle = css`
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.h2};
  color: ${({ theme }) => theme.colors.dark};
  margin: ${({ theme }) => theme.margins.mb4} 0;
  text-align: center;

  &::after {
    position: absolute;
    content: "";
    width: 32px;
    height: 0.18rem;
    left: 0;
    right: 0;
    margin: auto;
    top: 2rem;
    background-color: ${({ theme }) => theme.colors.first};
  }

  @media (min-width: 768px) {
    margin-bottom: 3rem;

    &::after {
      width: 64px;
      top: 3rem;
    }
  }
`;

export default {
  grid,
  section,
  sectionTitle,
};
