import { Action } from '@ngrx/store';

export const ADD_ITEM = '[Shopcart] ADD';
export const REMOVE_ITEM = '[Shopcart] REMOVE';


export class AddItem implements Action {
    readonly type = ADD_ITEM;

    /// user a constructor to send a payload with the action
    constructor(public payload: number) { }
}

export class RemoveItem implements Action {
    readonly type = REMOVE_ITEM;

    /// user a constructor to send a payload with the action
    constructor(public payload: number) { }
}

export type All
    = AddItem
    | RemoveItem;
