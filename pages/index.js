import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import CategoryCarousel from 'components/CategoryCarousel';

const StyledHome = styled.main`
  padding: 1rem;
`;

export default function Home({ films }) {
  return (
    <StyledHome>
      <CategoryCarousel films={films} />
    </StyledHome>
  );
}

export async function getServerSideProps() {
  const { API_URL } = process.env;
  const res_films = await fetch(`${API_URL}/films`);
  const films = await res_films.json();
  const res_series = await fetch(`${API_URL}/series`);
  const series = await res_series.json();

  return {
    props: { films, series },
  };
}
