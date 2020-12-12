import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.head`
  width: 100%;
`;

export const Header: React.FC = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};
