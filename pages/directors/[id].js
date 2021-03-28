import React from 'react';

export default function DirectorPage({ director }) {
  return <div>{director.first_name + ' ' + director.last_name}</div>;
}

export async function getServerSideProps({ params }) {
  const { API_URL } = process.env;
  const res_director = await fetch(`${API_URL}/directors/${params.id}`);
  const director = await res_director.json();

  return {
    props: { director },
  };
}
