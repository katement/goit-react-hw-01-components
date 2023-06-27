import styled from '@emotion/styled';

export const Tr = styled.tr`
  font-size: 12px;
  font-weight: bold;
  &:nth-child(even) {
    background-color: lightgrey;
  }
  &:nth-child(odd) {
    background-color: grey;
  }
`;
export const Trthead = styled.thead`
  background-color: lightblue;
`;
export const Trtable = styled.table`
  margin: 0 auto;
  margin-top: 20px;
`;
