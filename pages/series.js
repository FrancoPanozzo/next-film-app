import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import CategoryCarousel from 'components/CategoryCarousel';

const StyledFilms = styled.main``;

export default function Series({ series }) {
  return (
    <StyledFilms>
      <CategoryCarousel series={series} title="All" />
    </StyledFilms>
  );
}

export async function getServerSideProps() {
  const { API_URL } = process.env;
  const res_series = await fetch(`${API_URL}/series`);
  const series = await res_series.json();

  return {
    props: { series },
  };
}
