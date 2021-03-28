import React from 'react';
import styled from 'styled-components';
import PersonCard from 'components/PersonCard';

const StyledStaffList = styled.div`
  h3 {
    margin: 3vw 0 1.5vw;
    text-align: center;
  }
  .people-container {
    display: flex;
    justify-content: center;
  }
`;

export default function StaffList({ title, staff, type }) {
  return (
    <StyledStaffList>
      <h3>{title}</h3>
      <div className="people-container">
        {staff.map((p) => (
          <PersonCard key={p.id} p={p} type={type} />
        ))}
      </div>
    </StyledStaffList>
  );
}
