import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledPersonCard = styled.div`
  height: 100px;
  width: 100px;
  overflow: hidden;
  border-radius: 4px;
  margin-right: 12px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function PersonCard({ p }) {
  const { API_URL } = process.env;
  const name = p.first_name + ' ' + p.last_name;
  console.log(p);

  return (
    <StyledPersonCard>
      <Link href={`/people/${p.id}`}>
        <img src={API_URL + p.profile_pic.url} title={name} alt={name} />
      </Link>
    </StyledPersonCard>
  );
}
