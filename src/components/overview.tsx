import { Modal } from './modal';
import { Tab } from './tab';
import React from 'react';
import styled from 'styled-components';

const StyledOverview = styled.div`
  width: 902px;
  margin-right: 16px;
`;

const ReposWrapper = styled.div``;

export const Overview: React.FC = () => {
  return (
    <StyledOverview>
      <Tab>
        <div style={{ paddingLeft: 8, paddingRight: 8, marginBottom: 8, marginTop: 16 }}>
          <h2 style={{ fontStyle: 'bold' }}>ikoamu/README.md</h2>
        </div>
        <div style={{ paddingLeft: 8, paddingRight: 8, marginBottom: 24 }}>
          <Modal title="" hasHr>
            🐄
          </Modal>
        </div>
        <div style={{ paddingLeft: 8, paddingRight: 8, marginBottom: 8 }}>
          <p style={{ fontStyle: 'bold' }}>Popular repositories</p>
        </div>

        <div style={{ display: 'flex', width: '100%', marginBottom: 16 }}>
          <div style={{ paddingLeft: 8, paddingRight: 8, width: '50%' }}>
            <Modal title={'test'}>ok</Modal>
          </div>
          <div style={{ paddingLeft: 8, paddingRight: 8, width: '50%' }}>
            <Modal title={'test'}>ok</Modal>
          </div>
        </div>
        <div style={{ display: 'flex', width: '100%', marginBottom: 16 }}>
          <div style={{ paddingLeft: 8, paddingRight: 8, width: '50%' }}>
            <Modal title={'test'}>ok</Modal>
          </div>
          <div style={{ paddingLeft: 8, paddingRight: 8, width: '50%' }}>
            <Modal title={'test'}>ok</Modal>
          </div>
        </div>
        <div style={{ display: 'flex', width: '100%', marginBottom: 16 }}>
          <div style={{ paddingLeft: 8, paddingRight: 8, width: '50%' }}>
            <Modal title={'test'}>ok</Modal>
          </div>
          <div style={{ paddingLeft: 8, paddingRight: 8, width: '50%' }}>
            <Modal title={'test'}>ok</Modal>
          </div>
        </div>
        <div style={{ paddingLeft: 8, paddingRight: 8, marginBottom: 8, marginTop: 24 }}>
          <h2 style={{ fontStyle: 'bold' }}>2,560 contributions in the last year</h2>
        </div>
        <div style={{ paddingLeft: 8, paddingRight: 8, marginBottom: 24 }}>
          <Modal title="" hasHr>
            🐄
          </Modal>
        </div>
        <div style={{ paddingLeft: 8, paddingRight: 8, marginBottom: 8, marginTop: 24 }}>
          <h2 style={{ fontStyle: 'bold' }}>Contribution activity</h2>
        </div>
      </Tab>
    </StyledOverview>
  );
};
