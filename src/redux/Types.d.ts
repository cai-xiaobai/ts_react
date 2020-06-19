import { HomeAction, HomeState } from './modules/home/actionTypes'

//根 Action
export type RootAction = HomeAction

//根 State
export interface RootState {
    readonly home:HomeState
}

export type RootReducer = (state: RootState | undefined, action: RootAction) => RootState