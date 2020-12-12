import { Layout } from '../components/layout';
import { Profile } from '../components/profile';
import { Overview } from '../components/overview';
import React from 'react';

export default () => {
  return (
    <Layout>
      <div style={{ display: 'flex' }}>
        <Profile />
        <Overview />
      </div>
    </Layout>
  );
};
