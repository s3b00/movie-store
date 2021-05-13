export interface movieStateType {
    movie: null | IMovie;
    loading: boolean;
    error: null | string;
}

export enum MovieActionTypes {
    FETCH_MOVIE = 'FETCH_MOVIE',
    FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS',
    FETCH_MOVIE_ERROR = 'FETCH_MOVIE_ERROR',
    SET_MOVIE = 'SET_MOVIE',
    FETCH_MOVIE_REQUESTED = 'FETCH_MOVIE_REQUESTED'
}

export type FetchMovieAction = {
    type: MovieActionTypes.FETCH_MOVIE;
}

export type FetchMovieActionSuccess = {
    type: MovieActionTypes.FETCH_MOVIE_SUCCESS,
    payload: IMovie
}

export type FetchMovieActionError = {
    type: MovieActionTypes.FETCH_MOVIE_ERROR,
    payload: string
}

export type FetchMovieRequestedAction= {
    type: MovieActionTypes.FETCH_MOVIE_REQUESTED,
    payload: string
}

export type MovieAction = FetchMovieAction
| FetchMovieActionError | FetchMovieActionSuccess

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

export type IMovieRating = {
    'Source': string;
    'Value': string;
}
