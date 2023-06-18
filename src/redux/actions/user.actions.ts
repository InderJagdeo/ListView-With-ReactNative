import { GET_USER, UPDATE_USER, UserInterface, UserActionTypes } from '../types';
import { ActionCreator } from 'redux';

export const requestUser: ActionCreator<UserActionTypes> = () => {
    return { type: GET_USER };
}

export const updateUser: ActionCreator<UserActionTypes> = (user: UserInterface[]) => {
    return { type: UPDATE_USER, payload: user };
}
