import React from 'react';

export default function FilmPage({ serie }) {
  return <div>{serie.title}</div>;
}

export async function getServerSideProps({ params }) {
  const { API_URL } = process.env;
  const res_serie = await fetch(`${API_URL}/series/${params.id}`);
  const serie = await res_serie.json();

  return {
    props: { serie },
  };
}
