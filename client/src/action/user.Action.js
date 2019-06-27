import axiosInstance from '../utils/axiosInterceptor';
import {SHOW_USER} from './actionType'


const getUserToState = data => {
    console.log('user action get user');
    return{
        type: SHOW_USER,
        data
    }
}

export const getUser = () => dispatch => {
    axiosInstance({
        method:'GET',
        url: 'http://localhost:5000/user',
    })
        .then(res => {
            console.log('in user action ,', res)
            dispatch(getUserToState(res.data));
        });
}