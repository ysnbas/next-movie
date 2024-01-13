import React from "react";

import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

export default function HomeContainer({
  popularMovies = [],
  topRatedMovies = [],
  categories = [],
  selectedCategory,
}) {
  return (
    <div>
      <FeaturedMovie movie={popularMovies?.[0]} />
      <Categories categories={categories} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find(
              (genre) => genre.id.toString() === selectedCategory.id
            ).name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection title="Top Rated" movies={topRatedMovies.slice(1, 7)} />
      <MoviesSection title="Popular" movies={popularMovies.slice(1, 7)} />
    </div>
  );
}
