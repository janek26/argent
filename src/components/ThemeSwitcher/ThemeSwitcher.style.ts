import styled from "styled-components"

export const ThemeSwitcherWrapper = styled.span<{ activeIndex: 0 | 1 }>`
  position: fixed;
  top: 1rem;
  right: 1rem;

  display: flex;
  background-color: ${({ theme }) => theme.colors.background40};
  border-radius: 2rem;

  font-size: 1.5rem;
  padding: 0.5rem;
  width: fit-content;

  & > svg {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};

    &:nth-child(${({ activeIndex }) => 1 + activeIndex}) {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  & > svg + svg {
    margin-left: 0.5rem;
  }
`
