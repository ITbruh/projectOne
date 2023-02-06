let numberOfFilms = +prompt('сколько фильмов', '')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('один из ф', ''),
//       b = prompt('оценка', '');

for (let i = 0; i < 2; i++) {
    const a = prompt('один из ф', ''),
          b = prompt('оценка', '');

          if (a != null && b != null && a.length < 50 && a != '' && b != '') {
            personalMovieDB.movies[a] = b;
            console.log('doneee');
          } else { 
            console.log('error');
            i--;
          }
}

console.log(personalMovieDB.movies);



