import axiosInstance from '../utils/axiosInterceptor';
import {
    ADD_BUZZ,
    SHOW_BUZZ,
    PUT_LIKE,
    PUT_DISLIKE
} from './actionType';

import { DASHBOARD_BUZZ_URL } from './actionURL';

// POST REQUEST FOR BUZZ

const addBuzzFeedToState = (data) => {
    console.log("buzz action add");
    return {
        type: ADD_BUZZ,
        data
    }
}

export const addBuzz = formData => dispatch => {
    axiosInstance({
        method: 'post',
        url: `${DASHBOARD_BUZZ_URL}`,
        data: formData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
        .then(res => {
            console.log('data saved to server and comeback');
            dispatch(addBuzzFeedToState(res.data));
        })
        .catch(err => {
            console.log("action buzz error:=> ", err)
        })
}



// GET REQUEST FOR BUZZ FEED

const getBuzzFeedToState = (data) => {
    console.log("buzz action show");
    return {
        type: SHOW_BUZZ,
        data
    }
}

export const showBuzz = skip => dispatch => {
    axiosInstance({
        method: 'GET',
        url: `${DASHBOARD_BUZZ_URL}/${skip}`,
    })
        .then(res => {
            console.log('data fetched from server');
            dispatch(getBuzzFeedToState(res.data));
        });
}



// FOR LIKE 

const likeFromDB = data => {
    return {
        type: PUT_LIKE,
        data
    }
}

export const postLike = buzzId => dispatch => {
    axiosInstance({
        method: 'patch',
        data: buzzId,
        url: `${DASHBOARD_BUZZ_URL}/like`
    })
        .then(
            res => {
                console.log('in like action from db')
                dispatch(likeFromDB(res.data))
            }
        )
        .catch(
            err => {
                console.log("err in like", err)
            }
        )
}



// FOR DISLIKE

const dislikeFromDB = data => {
    return {
        type: PUT_DISLIKE,
        data
    }
}

export const postDislike = buzzId => dispatch => {
    axiosInstance({
        method: 'patch',
        data: buzzId,
        url: `${DASHBOARD_BUZZ_URL}/dislike`
    })
        .then(
            res => {
                console.log('in dislike action from db')
                dispatch(dislikeFromDB(res.data))
            }
        )
        .catch(
            err => {
                console.log("err in dislike", err)
            }
        )
}