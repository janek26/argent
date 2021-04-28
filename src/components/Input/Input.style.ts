import styled from "styled-components"

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.font};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.font};
  border-radius: ${({ theme }) => theme.sizes.borderRadius};

  padding: 0.5rem;
  font-size: 1.2rem;
  width: calc(100% - 1rem);

  &:focus-within,
  &:active {
    outline: none;
  }
`
