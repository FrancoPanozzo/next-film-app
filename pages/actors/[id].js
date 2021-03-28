import React from 'react';

export default function ActorPage({ actor }) {
  return <div>{actor.first_name + ' ' + actor.last_name}</div>;
}

export async function getServerSideProps({ params }) {
  const { API_URL } = process.env;
  const res_actor = await fetch(`${API_URL}/actors/${params.id}`);
  const actor = await res_actor.json();

  return {
    props: { actor },
  };
}
