export const GET_USER = 'GET_USER';
export const UPDATE_USER = 'UPDATE_USER';

export interface UserInterface {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export interface UserState {
    status: boolean;
    users: UserInterface[];
}

export interface UserAddress {
    latitude: number;
    longitude: number;
}

export interface Item {
    key: string;
    value: string;
}

interface GetUserAction { type: typeof GET_USER }
interface UpdateUserAction { type: typeof UPDATE_USER, payload: UserInterface[] }

export type UserActionTypes = GetUserAction | UpdateUserAction
