import React from 'react';
import styled from 'styled-components';
import FilmCard from 'components/FilmCard';
import SerieCard from 'components/SerieCard';

const StyledCategoryCarousel = styled.ul`
  display: flex;
`;

export default function CategoryCarousel({ films, series }) {
  function filmsList() {
    return films.map((film) => <FilmCard key={film.id} film={film} />);
  }
  function seriesList() {
    return series.map((serie) => <SerieCard key={serie.id} serie={serie} />);
  }
  return (
    <StyledCategoryCarousel>
      {films ? filmsList() : series ? seriesList() : null}
    </StyledCategoryCarousel>
  );
}
