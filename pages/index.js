import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import Card from 'components/Card';

const StyledHome = styled.main`
  padding: 1rem;
`;

export default function Home({ films }) {
  console.log(films);
  return (
    <StyledHome>
      {films.map((film) => (
        <Card key={film.id} film={film} />
      ))}
    </StyledHome>
  );
}

export async function getServerSideProps() {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/films`);
  const data = await res.json();

  return {
    props: { films: data },
  };
}
