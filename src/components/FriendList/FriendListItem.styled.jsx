import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  // gap: 15px;

  align-items: center;
  border-style: outset;
  justify-content: space-between;
  width: 180px;
  padding: 5px;
`;

export const ListSpan = styled.span`
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: flex;
  align-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const ListImg = styled.img`
  display: block;
  margin-left: 10px;
`;

export const ListP = styled.p`
  align-content: center;
  margin-left: 10px;
  margin-right: 5px;
`;
