import styled from '@emotion/styled';

export const Aside = styled.aside`
  position: sticky;
  display: flex;
  flex-direction: column;
  width: 250px;
  align-self: start;
  margin-right: 16px;
  @media (max-width: 1199px) {
    display: none;
  }
`;
