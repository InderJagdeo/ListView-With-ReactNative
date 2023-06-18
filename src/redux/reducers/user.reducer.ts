import { UPDATE_USER, UserState, UserActionTypes } from '../types';

const initialState: UserState = {
    status: false,
    users: []
};

export function userReducer(state: UserState = initialState, action: UserActionTypes): UserState {
    switch (action.type) {
        case UPDATE_USER: {
            return {
                ...state,
                status: true,
                users: action.payload
            };
        }
        default:
            return {
                ...state,
            };
    }
};
