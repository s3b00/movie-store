export interface MovieState {
    movies: any[];
    loading: boolean;
    error: null | string;
}

export enum MovieActionTypes {
    FETCH_MOVIES = 'FETCH_MOVIES',
    FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
    FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR'
}

export interface FetchMoviesAction {
    type: MovieActionTypes.FETCH_MOVIES;
}

export interface FetchMoviesSuccessAction {
    type: MovieActionTypes.FETCH_MOVIES_SUCCESS;
    payload: any[];
}

export interface FetchMoviesErrorAction {
    type: MovieActionTypes.FETCH_MOVIES_ERROR;
    payload: string;
}

export type MovieAction = FetchMoviesAction | FetchMoviesErrorAction | FetchMoviesSuccessAction

export type IMovieRating = {
    'Source': string;
    'Value': string;
}

export type IMovie = {
    'Title': string;
    'Year': string | number;
    'Rated': string;
    'Released': string;
    'Runtime': string;
    'Genre': string;
    'Director': string;
    'Writer': string;
    'Actors': string;
    'Plot': string;
    'Language': string;
    'Country': string;
    'Awards': string;
    'Poster': string;
    'Ratings': IMovieRating[];
    'Metascore': string;
    'imdbRating': string;
    'imdbVotes': string;
    'imdbID': string;
    'Type': string;
    'DVD': string;
    'BoxOffice': string;
    'Production': string;
    'Website': string;
    'Response': string | boolean;
};

export type IMovies = {
    'Search': IMovie[],
    'totalResults': number,
    'Response': boolean
}
