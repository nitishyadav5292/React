import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import Home from './HomeComponent'
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';
import {Route, Switch, Redirect} from 'react-router-dom';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
        dishes : DISHES,
        selectedDish : null
        }
    }
    onDishSelect(dishId){
        this.setState({
            selectedDish: dishId
        })
    } 
  render(){
    const HomePage = () => {
      return(
        <Home />
      )
    }
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage}></Route>
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />}></Route>
          <Redirect to="/home"></Redirect>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;