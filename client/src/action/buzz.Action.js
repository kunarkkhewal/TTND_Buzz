import axiosInstance from '../utils/axiosInterceptor';
import {
    ADD_BUZZ,
    SHOW_BUZZ,
    PUT_LIKE,
    PUT_DISLIKE,
    DASHBOARD_BUZZ_URL,
    LIKE_URL,
    DISLIKE_URL
} from '../utils/constants.js';
import { successAlert, errorAlert} from '../utils/alerts';

// POST REQUEST FOR BUZZ

const addBuzzFeedToState = (data) => {
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
            dispatch(addBuzzFeedToState(res.data));
            successAlert("Buzz Created")
        })
        .catch(res => {
            console.log("Error occured at adding buzz => ", res.err)
            errorAlert("Buzz Not Created, Something went wrong");
        })
}



// GET REQUEST FOR BUZZ FEED

const getBuzzFeedToState = (data) => {
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
            dispatch(getBuzzFeedToState(res.data));
        })
        .catch(res => {
            console.log("Error occured at showing buzz => ", res.err)
            errorAlert("Something went wrong while fetching buzz")
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
        url: `${LIKE_URL}`
    })
        .then(
            res => {
                dispatch(likeFromDB(res.data))
            }
        )
        .catch(
            res => {
                console.log("Error occured while liking post", res.err)
                errorAlert("Something Went Wrong while liking post");
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
        url: `${DISLIKE_URL}`
    })
        .then(
            res => {
                dispatch(dislikeFromDB(res.data))
            }
        )
        .catch(
            res => {
                console.log("Error occured while disliking post", res.err)
                errorAlert("Something Went Wrong while disliking post");
            }
        )
}