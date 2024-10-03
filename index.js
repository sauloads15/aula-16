
// const moviesData = [
//     { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },
//     { id: 2, title: 'The Matrix', director: 'Lana Wachowski, Lilly Wachowski', year: 1999 },
//     { id: 3, title: 'Interstellar', director: 'Christopher Nolan', year: 2014 },
// ];


// function fetchMovie(id) {
//     return new Promise((resolve, reject) => {
        
//         setTimeout(() => {
//             const movie = moviesData.find(m => m.id === id);
//             if (movie) {
//                 resolve(movie);
//             } else {
//                 reject(new Error(`Filme com ID ${id} não encontrado.`));
//             }
//         }, 1000); 
//     });
// }


// async function fetchAllMovies() {
//     try {
//         const moviePromises = [1, 2, 3].map(id => fetchMovie(id));
//         const results = await Promise.all(moviePromises);
        
        
//         results.forEach(movie => {
//             console.log(`Título: ${movie.title}, Diretor: ${movie.director}, Ano: ${movie.year}`);
//         });
//     } catch (error) {
//         console.error('Erro ao buscar dados dos filmes:', error);
//     }
// }


// fetchAllMovies();

// const movies = [
//     { id: 1, title: 'Inception', overview: 'Um ladrão que entra nos sonhos das pessoas.', director: 'Christopher Nolan', release_date: '2010-07-16', vote_average: 8.8 },
//     { id: 2, title: 'The Matrix', overview: 'Um hacker descobre a verdade sobre seu mundo.', director: 'Lana e Lilly Wachowski', release_date: '1999-03-31', vote_average: 8.7 },
//     { id: 3, title: 'Interstellar', overview: 'Um grupo de exploradores viaja através de um buraco de minhoca.', director: 'Christopher Nolan', release_date: '2014-11-07', vote_average: 8.6 },
// ];

// function obterDetalhesFilme(movieId) {
//     return new Promise((resolve, reject) => {
//         const movie = movies.find(m => m.id === movieId);
//         if (movie) {
//             resolve(movie);
//         } else {
//             reject(new Error('Filme não encontrado.'));
//         }
//     });
// }

// async function buscarEExibirDetalhesFilme(movieId) {
//     try {
//         const movieDetails = await obterDetalhesFilme(movieId);
//         console.log(`Título: ${movieDetails.title}`);
//         console.log(`Sinopse: ${movieDetails.overview}`);
//         console.log(`Diretor: ${movieDetails.director}`);
//         console.log(`Ano: ${movieDetails.release_date}`);
//         console.log(`Avaliação: ${movieDetails.vote_average}`);
//     } catch (error) {
//         console.error(error.message);
//     }
// }


// buscarEExibirDetalhesFilme(1); 



