import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transfomedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}></BurgerIngredient>
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    if (transfomedIngredients === 0) {
        transfomedIngredients =  <p>Please start adding ingredients!</p>
    }  
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transfomedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default burger;