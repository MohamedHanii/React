import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Dish from './DishdetailComponent';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { connect } from 'react-redux';

const mapStateToProps = state =>{
    return{

        dishes:state.dishes,
        comments:state.comments,
        promotions:state.promotions,
        leaders:state.leaders
    }
}

class Main extends Component {

    constructor(props) {
        super(props);
 
    }
  
    render() {
        const DishWithId = ({match}) => {
            return(
                <Dish dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                  comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            );
          };

        const AboutUsWithLeaders = () => {
            return (
                <About leaders={this.props.leaders}/>
            );
        }

        return (
            <div>
                <Header />

                <Switch>
                    <Route path='/home' component={() => <Home
                    dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]} />} />
                    <Route exact path='/aboutus' component={AboutUsWithLeaders}/>
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/contactus' component={Contact}/>
                    <Redirect to="/home" />
                </Switch>

                <Footer />
            </div>
        );

    }

}

export default withRouter(connect(mapStateToProps)(Main));