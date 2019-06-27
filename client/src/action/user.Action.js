import axiosInstance from '../utils/axiosInterceptor';
import {SHOW_USER} from './actionType'
import {USER_URL} from './actionURL'

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
        url: `${USER_URL}`,
    })
        .then(res => {
            console.log('in user action ,', res)
            dispatch(getUserToState(res.data));
        });
}