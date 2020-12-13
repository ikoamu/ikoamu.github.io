import React from 'react';

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

const Grid = styled.div`
  display: grid;
  width: 488px;
  border-top: solid 4px rgb(134 138 142);
  border-left: solid 4px rgb(134 138 142);
  border-bottom: solid 4px white;
  border-right: solid 4px white;
`;

const getText = (i: number, j: number) => {
  const getRandomInt = (max: number) => Math.floor(Math.random() * Math.floor(max));

  if (getRandomInt(3) < 2) {
    return <></>;
  }
  if (getRandomInt(2) === 1) {
    return (
      <text x={12 * i + 3} y={12 * j + 12 - 2} fontSize={13} fontStyle="bold" fill="#123dff">
        1
      </text>
    );
  }
  if (getRandomInt(3) < 2) {
    return (
      <text x={12 * i + 3} y={12 * j + 12 - 2} fontSize={13} fill="green">
        2
      </text>
    );
  }

  return (
    <text x={12 * i + 3} y={12 * j + 12 - 2} fontSize={13} fill="#e11c2d">
      3
    </text>
  );
};

export const Contributions = () => {
  return (
    <div className="aesthetic-windows-95-modal">
      <div className="aesthetic-windows-95-modal-title-bar">
        <div className="aesthetic-windows-95-modal-title-bar-text">{'hoge'}</div>
        <div className="aesthetic-windows-95-modal-title-bar-controls">
          <div className="aesthetic-windows-95-button-title-bar" style={{ paddingLeft: 1 }}>
            <button style={{ fontFamily: 'sans-serif', paddingLeft: 1 }}>X</button>
          </div>
        </div>
      </div>
      <div className="aesthetic-windows-95-modal-content">
        <Hr style={{ borderWidth: 1 }} />
        <div style={{ display: 'flex', fontSize: '13' }}>
          <div style={{ marginRight: 4 }}>
            <p style={{ fontSize: 10, marginBottom: 1, paddingTop: 16 }}>月曜日</p>
            <p style={{ fontSize: 10, paddingTop: 12 }}>水曜日</p>
            <p style={{ fontSize: 10, paddingTop: 12 }}>金曜日</p>
          </div>
          <Grid>
            <svg width={12 * 40} height={12 * 7} xmlns="http://www.w3.org/2000/svg">
              {[...Array(40)].map((_, i) => {
                return (
                  <g key={i} transform="translate(0, 0)">
                    {[...Array(7)].map((_, j) => {
                      return (
                        <g key={j}>
                          <line
                            x1={12 * (i + 1)}
                            y1={12 * j}
                            x2={12 * (i + 1)}
                            y2={12 * (j + 1)}
                            stroke="black"
                            strokeDasharray={2}
                          />
                          <line
                            x1={12 * i}
                            y1={12 * (j + 1)}
                            x2={12 * i + 12}
                            y2={12 * (j + 1)}
                            stroke="black"
                            strokeDasharray={2}
                          />
                          {getText(i, j)}
                        </g>
                      );
                    })}
                  </g>
                );
              })}
            </svg>
          </Grid>
        </div>
      </div>
    </div>
  );
};
