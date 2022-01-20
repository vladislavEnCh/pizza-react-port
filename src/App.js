import React from 'react';
import axios from 'axios';
import { connect  } from 'react-redux';

import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from "./components/Header"
import Home from './pages/Home';
import  Cart  from './pages/Cart';
import  {setPizzas} from './redux/actions/pizzas';
// import store from './redux/store';
// import { setCategoryBy } from './redux/actions/filters';

function App({setPizzas, items}) {
  // const [pizzas, setPizzas] = React.useState([])
//  const nameSort = useSelector(name => state.state)
const {categoryBy} = useSelector(({filters}) => filters)

// store.dispatch(setCategoryBy())
  React.useEffect(()=>{
    axios.get(`/pizzas?${categoryBy !== null ? `category=${categoryBy}` : ''}`)
            .then(({data}) => {
             setPizzas(data)
            })
            console.log(categoryBy)
  },[categoryBy])
  return (
    <div className="wrapper">
      <Header/>
       <div className="content">
         <Switch>
        
         <Route path="/" component={Home} exact />
         {/* render={() => <Home items={[]} */}
         <Route path="/cart" component={Cart} exact />
         </Switch>
       </div>
     </div>
  );

}
// class App extends React.Component {
//   componentDidMount(){
//     // console.log(window.store)
//     axios.get('http://localhost:3001/db.json')
//         .then(({data}) => {
//           this.props.setPizzas(data.pizzas)
//         })
//     // fetch('http://localhost:3001/db.json')
//     // .then(resp => resp.json())
//     // .then(json =>{
//     //   // setPizzas(json.pizzas)
//     //   this.state.dispatch(setPizzas())
//     // })
     
//   }
//   render(){
//     // console.log(this.props)
//       return <div className="wrapper">
//       <Header/>
//       <div className="content">
//         <Switch>
//         <Route path="/" render={() => <Home items={this.props.items}/>} exact />
        
//         <Route path="/cart" component={Cart} exact />
//         </Switch>
//       </div>
//     </div>
//   }
// }

const mapStateToProps = (state) =>{
  return {
    items: state.pizzas.items
    
  }
}

const toProps =  {
  setPizzas,
}

export default connect(mapStateToProps, toProps)(App);
