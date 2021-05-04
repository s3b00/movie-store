export interface MoviesState {
    movies: any[];
    loading: boolean;
    error: null | string;
}

export enum MoviesActionTypes {
    FETCH_MOVIES = 'FETCH_MOVIES',
    FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
    FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR',
    SET_MOVIES = 'SET_MOVIES',
    MOVIES_FETCH_REQUESTED = 'MOVIES_FETCH_REQUESTED'
}

export interface FetchMoviesAction {
    type: MoviesActionTypes.FETCH_MOVIES;
}

export interface FetchMoviesSuccessAction {
    type: MoviesActionTypes.FETCH_MOVIES_SUCCESS;
    payload: any[];
}

export interface SetMoviesAction {
    type: MoviesActionTypes.SET_MOVIES;
    payload: any[];
}

export interface FetchMoviesErrorAction {
    type: MoviesActionTypes.FETCH_MOVIES_ERROR;
    payload: string;
}

export interface MoviesFetchRequestAction {
    type: MoviesActionTypes.MOVIES_FETCH_REQUESTED;
    payload: string;
}

export type MoviesAction = FetchMoviesAction | SetMoviesAction
| FetchMoviesErrorAction | FetchMoviesSuccessAction

export type IMovieCard = {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}
