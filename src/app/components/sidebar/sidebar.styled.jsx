import styled from '@emotion/styled';

export const Aside = styled.aside`
  position: sticky;
  display: flex;
  min-width: 350px;
  height: 1000px;
  align-self: start;
  margin-right: 16px;
  @media (max-width: 1199px) {
    display: none;
  }
`;
