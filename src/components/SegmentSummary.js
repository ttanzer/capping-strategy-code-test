import React from 'react'

export const SegmentSummary = ({capPercent, startYear, endYear, data}) => {
  return (
    <div style={{marginTop: 40}}>
      <table style={{width: '100%'}}>
        <thead>
          <tr>
            <th>
              Period
            </th>
            <th>
              S&amp;P Return
            </th>
            <th>
              Capped Return
            </th>
            <th>
              Winner
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );

};