export enum ActionTypes {
    CREATE_INCREMENT = "CREATE_INCREMENT",
    CREATE_DECREMENT = "CREATE_DECREMENT"
}

export interface IncrementAction {
    type: ActionTypes.CREATE_INCREMENT, 
    payload: number
}

export interface DecrementAction {
    type: ActionTypes.CREATE_DECREMENT, 
    payload: number
}

export type AllActions = IncrementAction | DecrementAction