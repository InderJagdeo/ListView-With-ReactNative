
import { RootState } from "../reducers";
import { createSelector } from "reselect";

const getStatus = (state: RootState) => state.user.status;
const getUser = (state: RootState) => state.user.users;

export const getStatusSelector = createSelector(getStatus, (status) => status);
export const getUserSelector = createSelector(getUser, (users) => users);