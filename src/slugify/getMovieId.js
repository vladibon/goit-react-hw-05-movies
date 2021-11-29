const getMovieId = slug => slug.match(/[a-z0-9]+$/)[0];

export default getMovieId;
