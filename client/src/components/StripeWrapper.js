import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { handleStripeToken } from '../actions';

class StripeWrapper extends Component {

    render(){
        
        return (
            <StripeCheckout
            name="Survey"
            description="$5 for 5 email"
            amount={500}
            token={token => this.props.handleStripeToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
            <button className="btn">Add Credit</button>
            </StripeCheckout>
        )
    }
}


export default connect(null, { handleStripeToken })(StripeWrapper);