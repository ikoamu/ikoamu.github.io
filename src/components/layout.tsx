import React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div``;

export const Layout: React.FC = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};
