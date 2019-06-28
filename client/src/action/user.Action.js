import axiosInstance from '../utils/axiosInterceptor';
import { SHOW_USER } from './actionType';
import { USER_URL } from './actionURL';
import {errorAlert} from './actionAlert'

const getUserToState = data => {
    return {
        type: SHOW_USER,
        data
    }
}

export const getUser = () => dispatch => {
    axiosInstance({
        method: 'GET',
        url: `${USER_URL}`,
    })
        .then(res => {
            dispatch(getUserToState(res.data));
        })
        .catch(res => {
            console.log("Error occured while fetching user details", res.err)
            errorAlert("Something went wrong while getting User Info")
        });
}