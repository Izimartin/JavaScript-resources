import React, { useCallback, useState } from 'react';
import './App.css';
import produce from 'immer';
import create from 'zustand';

const movieList = [
  { id: 0, name: 'The Shawshank Redemption', likes: 0 },
  { id: 1, name: 'The Godfather', likes: 0 },
  { id: 2, name: 'The Godfather: Part II', likes: 0 },
  { id: 3, name: 'The Dark Knight', likes: 0 },
  { id: 4, name: '12 Angry Men', likes: 0 },
  { id: 5, name: "Schindler's List", likes: 0 },
  { id: 6, name: 'The Lord of the Rings: The Return of the King ', likes: 0 },
  { id: 7, name: 'Pulp Fiction', likes: 0 },
  { id: 8, name: 'The Good, the Bad and the Ugly', likes: 0 },
  { id: 9, name: 'The Lord of the Rings: The Fellowship of the Ring', likes: 0 },
];

// Turn the set method into an immer proxy
const immer = (config) => (set, get, api) => config((fn) => set(produce(fn)), get, api);

const useStore = create(
  immer((set, get) => ({
    movies: movieList,
    like: (id) =>
      set((state) => {
        state.movies[id].likes += 1;
      }),
    dislike: (id) =>
      set((state) => {
        state.movies[id].likes -= 1;
      }),
    topMovieName: () =>
      get().movies.reduce((max, current) => (current.likes > max.likes ? current : max), get().movies[0]).name,
    totalLikes: () => get().movies.reduce((accumulator, movie) => accumulator + movie.likes, 0),
  }))
);

const App = () => (
  <>
    <Nav />
    <Body />
  </>
);

const Nav = () => {
  const { topMovieName, totalLikes } = useStore(({ topMovieName, totalLikes }) => ({
    topMovieName: topMovieName(),
    totalLikes: totalLikes(),
  }));

  return (
    <div className="nav">
      <TopMovie topMovieName={topMovieName} />
      <TotalLikes totalLikes={totalLikes} />
    </div>
  );
};

const TopMovie = ({ topMovieName }) => <div>{topMovieName}</div>;

const TotalLikes = ({ totalLikes }) => <div>Total Likes: {totalLikes}</div>;

const Body = () => (
  <div className="body">
    <Movies />
  </div>
);

const stateToMovie = ({ movies, like, dislike }) => ({ movies, like, dislike });

const Movies = () => {
  const [movieIds] = useState(movieList.map((movie) => movie.id));
  const { movies, like, dislike } = useStore(stateToMovie);

  return (
    <div>
      <h2>Movies</h2>
      <div className="movie-list">
        {movieIds.map((id) => {
          return <Movie key={id} movie={movies[id]} like={like} dislike={dislike} />;
        })}
      </div>
    </div>
  );
};

const Movie = React.memo(({ movie, like, dislike }) => {
  console.log('render', movie.id);
  return (
    <div className="movie-item">
      <div>{movie.name}</div>
      <div>{movie.likes}</div>
      <div>
        <button onClick={() => like(movie.id)}>
          <span role="img" aria-label="like">
            👍🏼
          </span>
        </button>
        <button onClick={() => dislike(movie.id)}>
          <span role="img" aria-label="dislike">
            👎🏼
          </span>
        </button>
      </div>
    </div>
  );
});

export default App;
