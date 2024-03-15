import Movie from "./Movie";

function Genre({ name, description, movie1, movie2, card }) {
  return (
    <>
      <h2>Genre title: {name}</h2>
      <h2>Description: {description}</h2>
      <hr />
      <Movie title={movie1.movieTitle} year={movie1.year} />
      <Movie title={movie2.movieTitle} year={movie2.year} />
    </>
  );
}

export default Genre;
