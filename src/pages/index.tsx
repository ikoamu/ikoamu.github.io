import React from 'react';
import { Layout } from "../components/layout"
import { Header } from '../components/header';
import { Profile } from '../components/profile';
import { Overview } from '../components/overview';

export default () => {
  return(
    <Layout>
      <div style={{display: 'flex'}}>
        <Profile/>
        <Overview/>
      </div>
    </Layout>
  );
};
