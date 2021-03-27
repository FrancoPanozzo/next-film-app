import React from 'react';

export default function FilmPage({ film }) {
  return <div>{film.title}</div>;
}

export async function getServerSideProps({ params }) {
  const { API_URL } = process.env;
  const res_film = await fetch(`${API_URL}/films/${params.id}`);
  const film = await res_film.json();

  return {
    props: { film },
  };
}
