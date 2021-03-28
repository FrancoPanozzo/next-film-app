import React from 'react';
import styled from 'styled-components';
import PersonCard from 'components/PersonCard';

const StyledStaffList = styled.div`
  h3 {
    margin: 3vw 0 1.5vw;
  }
  .people-container {
    display: flex;
  }
`;

export default function StaffList({ title, staff }) {
  return (
    <StyledStaffList>
      <h3>{title}</h3>
      <div className="people-container">
        {staff.map((p) => (
          <PersonCard p={p} />
        ))}
      </div>
    </StyledStaffList>
  );
}
