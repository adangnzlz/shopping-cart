import * as ShopCartActions from '../actions/shopcart.actions';
import { ShopCart } from '../models/shopcart.model';
import { ADD_ITEM, REMOVE_ITEM } from '../actions/shopcart.actions';

export type Action = ShopCartActions.All;

/// Default app state
const defaultState: ShopCart = {
    total: 0,
    items: []
};

/// Helper function to create new state object
const newState = (state, newData) => {
    return Object.assign({}, state, newData);
};


/// Reducer function
export function shopcartReducer(state: ShopCart = defaultState, action: Action) {
    console.log(action.type, state);
    switch (action.type) {
        case ShopCartActions.ADD_ITEM:
            state.items.push(action.payload);
            return newState(state, {
                total: state.total + 1,
                items: state.items
            });
        case ShopCartActions.REMOVE_ITEM:
            const shopCartAfterRemove = removeFirstOcurrence(state.items, action.payload);
            return newState(state, {
                total: shopCartAfterRemove.length,
                items: shopCartAfterRemove
            });
        default:
            return state;

    }
}

function removeFirstOcurrence(items, id) {
    let removed = 0;
    const shopCartAfterRemove = items.filter(item => {
        if (item === id) {
            removed++;
        }
        return (item !== id || removed > 1);
    });
    return shopCartAfterRemove;
}

