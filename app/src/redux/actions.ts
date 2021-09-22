import { ActionTypes, DecrementAction, IncrementAction } from "./types";

export function increment(incrementValue: number): IncrementAction {
    return {
        type: ActionTypes.CREATE_INCREMENT,
        payload: incrementValue,
    };
}

export function decrement(decrementValue: number): DecrementAction {
    return {
        type: ActionTypes.CREATE_DECREMENT,
        payload: decrementValue,
    };
}
