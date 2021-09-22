import { ActionTypes, AllActions } from "../types";

interface InitialState {
    value: number; 
}

const initialState: InitialState = {
    value: 0,
};

export const profileReducer = (state = initialState, action: AllActions) => {
    switch (action.type) {
        case ActionTypes.CREATE_INCREMENT:
            return {
                ...state,
                value: action.payload,
            };
        case ActionTypes.CREATE_DECREMENT:
            return {
                ...state,
                value: action.payload,
            };
        default:
            return state;
    }
};
