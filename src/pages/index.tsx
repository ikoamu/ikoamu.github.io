import { Layout } from '../components/layout';
import { Profile } from '../components/profile';
import { Overview } from '../components/overview';
import { Header } from '../components/header';
import styled from 'styled-components';
import React from 'react';

const StyledWrapper = styled.div`
  width: 1000px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  background-color: #bfbfbf;
  padding-top: 8px;
`;

export default () => {
  return (
    <>
      <Header />
      <Layout>
        <StyledWrapper>
          <Profile />
          <Overview />
        </StyledWrapper>
      </Layout>
    </>
  );
};
