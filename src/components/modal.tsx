import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Hr = styled.hr`
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  overflow: hidden;
  border-style: inset;
  border-width: 1px;
`;

export const Modal: React.FC<PropsWithChildren<{title: string, hasHr?: boolean}>> = ({title, hasHr, children}) => {
  return (
    <div className="aesthetic-windows-95-modal">
      <div className="aesthetic-windows-95-modal-title-bar">
        <div className="aesthetic-windows-95-modal-title-bar-text">
          {title}
        </div>
        <div className="aesthetic-windows-95-modal-title-bar-controls">
          <div className="aesthetic-windows-95-button-title-bar" style={{paddingLeft: 1}}>
            <button style={{fontFamily: 'sans-serif', paddingLeft: 1}}>X</button>
          </div>
        </div>
      </div>
      <div className="aesthetic-windows-95-modal-content">
        {hasHr && <Hr style={{borderWidth: 1}}/>}
        <div className="aesthetic-windows-95-container-indent">
          {children}
        </div>
      </div>
    </div>
  );
};