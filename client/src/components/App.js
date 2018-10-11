import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';

import { fetchUser } from '../actions';
import  Landing from './Landing';

const Dashboard = () => <div>Dashboard</div>
const SurveyNew = () => <div>SurveyNew</div>
class App extends React.Component {

componentDidMount(){
console.log(this.props.fetchUser());
}
    render(){
        return(
            <div className="container"> 
           <BrowserRouter>
           <div>
               <Header />
               <Route exact path="/" component={Landing} />
               <Route exact path="/surveys" component={Dashboard} />
               <Route  path="/surbeys/new" component={SurveyNew} />
           </div>
           </BrowserRouter>     
            </div>
        )
    }
}

export default connect(null, {fetchUser})(App);