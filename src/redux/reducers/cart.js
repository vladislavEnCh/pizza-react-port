const initialState = {
    items: {},
    totalPrice: 0,
    totalCount:0
 }
 
 const cart = (state = initialState, action) => {
     switch (action.type) {
         case 'ADD_PIZZA_CART':{
             const carrPiz = !state.items[action.payload.id]
             ? [action.payload]
             :[...state.items[action.payload.id].items, action.payload];

             const newItems ={
                ...state.items,
                [action.payload.id] : {
                    items: carrPiz,
                    totalPrice: carrPiz.reduce((sum, obj) => obj.price + sum, 0)
                }
             }
             const items = Object.values(newItems).map(obj => obj.items)
             const allPizza = [].concat.apply([], items)
             const sumPrice = allPizza.reduce((sum, obj) => obj.price + sum, 0)
            return {
                ...state,
                items:newItems,
                totalCount: allPizza.length,
                totalPrice: sumPrice
                  
              }};
          case 'CLEAR_CART':
              return {
                  ...state,
                  items: {},
                  totalPrice: 0,
                  totalCount:0
              }
     
         default:
             return state;
     }
     
 }
 
 export default cart;