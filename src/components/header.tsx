import React from 'react';
import styled from 'styled-components';

const Hr = styled.hr`
  display: block;
  unicode-bidi: isolate;
  margin-inline-start: auto;
  margin-inline-end: auto;
  overflow: hidden;
  border-style: inset;
  border-width: 1px;
`;

const StyledHeader = styled.header`
  background-color: #bfbfbf;
`;

const ContentWrapper = styled.div`
  padding: 16px 32px;
`;

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <ContentWrapper>
          <input
            style={{ backgroundColor: 'white' }}
            className="aesthetic-windows-95-text-input"
            type="text"
            value="c:\aesthetic\src"
          />
        </ContentWrapper>
        <Hr />
      </StyledHeader>
    </>
  );
};
