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
  position: relative;

  &:hover {
    .overlay {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    opacity: 0;
    transition: opacity 0.2s ease;

    span {
      text-align: center;
      width: 100%;
    }
  }
`;

export default function PersonCard({ p, type }) {
  const { API_URL } = process.env;
  const name = p.first_name + ' ' + p.last_name;

  return (
    <Link href={`/${type}/${p.id}`}>
      <StyledPersonCard>
        <img src={API_URL + p.profile_pic.url} alt={name} />
        <div className="overlay">
          <span>{name}</span>
        </div>
      </StyledPersonCard>
    </Link>
  );
}
