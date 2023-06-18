
import request from "../../services";
import { updateUser } from "../actions";
import { GET_USER, UserInterface } from "../types";
import { Method } from "../../services/serviceConfig";
import { all, put, takeLatest } from 'redux-saga/effects';
import { Users_Endpoint } from "../../services/serviceEnpoint";

export function* userSaga() {
    try {
        yield all([takeLatest(GET_USER, userSagaRequest)]);
    } catch (err) {
        console.log('Error in translation observer');
    }
}

// Function to handle the Saga logic
function* userSagaRequest(): Generator {
    try {
        const response: unknown = yield request<undefined, UserInterface[]>(Method.GET, Users_Endpoint);
        const typedResponse: UserInterface[] = response as UserInterface[];
        const userData: UserInterface[] = typedResponse.map((item: UserInterface) => {
            const { id, name, username, email, phone, website, company, address } = item;
            return { id, name, username, email, phone, website, company, address };
        });
        yield put(updateUser(userData));
    } catch (err) {
        console.log('Error: ', err);
    }
}
