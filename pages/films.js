import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import CategoryCarousel from 'components/CategoryCarousel';

const StyledFilms = styled.main`
  padding: 1rem;
`;

export default function Films({ films }) {
  return (
    <StyledFilms>
      <CategoryCarousel films={films} />
    </StyledFilms>
  );
}

export async function getServerSideProps() {
  const { API_URL } = process.env;
  const res_films = await fetch(`${API_URL}/films`);
  const films = await res_films.json();

  return {
    props: { films },
  };
}
