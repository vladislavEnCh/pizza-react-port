import filters from './filters'
import pizzas from './pizzas'
import {  combineReducers } from 'redux'
import cart from './cart'

const rootReducers = combineReducers({
    filters,
    pizzas,
    cart
})

export default rootReducers