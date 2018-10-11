import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StripeWrapper from './StripeWrapper';

class Header extends Component {
renderContent(){
  switch(this.props.user){
    case null:
    return ;
    case false:
    return <li><a href="/auth/google">Login(Google)</a></li>;
    default:
  return  [
  <li key="1"><StripeWrapper /></li>,
  <li key="3" style={{margin: '0 10px'}}>Credits: {this.props.user.credits} </li>,
  <li key="2"><a href="/api/logout">Logout</a></li>

];
  }
}
    render(){
      console.log(this.props)
        return(
            <nav>
    <div className="nav-wrapper">
      <Link
       to={ this.props.user ? '/surveys' : '/'}
       className="brand-logo">
      Logo
      </Link>
      <ul  className="right hide-on-med-and-down">
      {this.renderContent()}
      </ul>
    </div>
  </nav>
        )
    }
}

const mapStateToProps = ({auth:{user}}) => ({ user });

export default connect(mapStateToProps)(Header);