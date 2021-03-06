import * as actionTypes from './actionTypes';
import axios from '../../../src/axios-orders';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

export const fetchIngredientsFailed = () => {
    return actionTypes.FETCH_INGREDIENT_FAILED
}
export const initIngredients = () => {
    return dispatch => {
        axios.get(process.env.REACT_APP_BACKEND_URL + "/Ingredients.json")
        .then(response => {
            dispatch(setIngredients(response.data))
        })
        .catch(error => {
            dispatch(fetchIngredientsFailed())
        });
    }
}
