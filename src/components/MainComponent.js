import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import Home from './HomeComponent'
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import {Route, Switch, Redirect} from 'react-router-dom';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
        dishes: DISHES,
        leaders: LEADERS,
        comments: COMMENTS,
        promotions: PROMOTIONS
        }
    }

  render(){
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
  
    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        leader={this.state.leaders.filter((leader)=> leader.featured)[0]}
        promotion={this.state.promotions.filter((promo)=> promo.featured)[0]} />
      )
    }
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage}></Route>
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />}></Route>
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route path="/contactus" component={Contact} />
          <Redirect to="/home"></Redirect>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;