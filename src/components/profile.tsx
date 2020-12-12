import React from 'react';
import styled from 'styled-components';

const StyledProfile = styled.div`
  width: 280px;

  img {
    border-radius: 50%;
    width: 100%;
  }

  .username {
    padding: 16px 0;
  }

  .buttons {
    width: 100%;
    height: 32px;
    display: flex;
  }
`;

export const Profile: React.FC = ({ children }) => {
  return (
    <>
      <StyledProfile>
        <div style={{ width: 240, height: 240 }} className="aesthetic-effect-crt">
          <img src="https://avatars2.githubusercontent.com/u/38206334?s=460&u=00d23b9f7c3cb0081ce9cabd52eec07c1856ce3e&v=4" />
        </div>
        <div className="username">
          <span style={{ fontSize: 26, fontWeight: 'bold', fontStyle: 'italic' }}>
            S h o t a r o A o k i
          </span>
          <br />
          <span style={{ fontSize: 20, fontStyle: 'italic' }}>ikoamu</span>
        </div>
        <div className="buttons" style={{ marginBottom: 16 }}>
          <button className="aesthetic-windows-95-button" style={{ width: '100%', height: '100%' }}>
            Follow
          </button>
          <button
            className="aesthetic-windows-95-button"
            style={{ marginLeft: 8, width: 66, height: '100%' }}
          >
            ・・・
          </button>
        </div>
        <div>0 followers 0following ☆0</div>
        <div>Organizations □□□□□□□□□□□□□□□</div>
      </StyledProfile>
    </>
  );
};
