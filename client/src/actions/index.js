import axios from 'axios';
import constants from '../constants';

export const fetchUser =  () => async dispatch => {
const res = await axios.get('/api/user');
dispatch({ type: constants.FETCH_USER,
    user: res.data || false })
}

export const handleStripeToken = token => async dispatch => {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: constants.FETCH_USER,
        user: res.data})
}