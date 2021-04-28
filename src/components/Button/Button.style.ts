import styled from "styled-components"

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accent}; /** as fallback*/
  background: radial-gradient(
    ${({ theme }) => theme.colors.accent},
    ${({ theme }) => theme.colors.accent90}
  );
  border: 1px solid ${({ theme }) => theme.colors.font};
  border-radius: ${({ theme }) => theme.sizes.borderRadius};

  padding: 0.5rem;
  font-size: 1.2rem;

  &:focus-within,
  &:active {
    outline-color: ${({ theme }) => theme.colors.accent};
  }
`
