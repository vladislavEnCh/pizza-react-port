// import axios from "axios"

export let setPizzas = (items)=>({
    type: 'SET_PIZZAS',
    payload: items
})

//  export const fetchPizza = () => (dispatch) => {
//     axios.get('http://localhost:3002/db.json')
//     .then(({data}) => {
//      dispatch(setPizzas(data.pizzas))
//     })
//  }