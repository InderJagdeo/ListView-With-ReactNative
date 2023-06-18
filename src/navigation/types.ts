import { UserInterface } from "../redux";

export type RootStackParamList = {
    User: undefined;
    UserDetail: { user: UserInterface }
};