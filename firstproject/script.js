let numberOfFilms = +prompt('сколько фильмов', '')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const quest = prompt("один из ф", ""),
      b = prompt('оценка', '');

personalMovieDB.movies[quest] = b;

console.log(personalMovieDB.movies)


