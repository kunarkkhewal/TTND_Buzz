import axiosInstance from '../utils/axiosInterceptor';
import {
    ADD_BUZZ,
    SHOW_BUZZ,
    PUT_LIKE,
    PUT_DISLIKE
} from './actionType';
import { DASHBOARD_BUZZ_URL } from './actionURL';
import {successAlert, errorAlert, warningAlert, infoAlert} from './actionAlert';


let like = false;
let dislike = false

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
        url: `${DASHBOARD_BUZZ_URL}/like`
    })
        .then(
            res => {
                dispatch(likeFromDB(res.data))
                if (like === false) {
                    like = !like
                    successAlert("You liked this post")
                } else {
                    like = !like
                    warningAlert("Your like is removed from this post")
                }
            }
        )
        .catch(
            res => {
                console.log("Error occured while liking post", res.err)
                errorAlert("Something went wrong")
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
                dispatch(dislikeFromDB(res.data))
                if (dislike === false) {
                    dislike = !dislike
                    infoAlert("You disliked this post")
                } else {
                    dislike = !dislike
                    infoAlert("Your dislike is removed from this post")
                }
            }
        )
        .catch(
            res => {
                console.log("Error occured while disliking post", res.err)
                errorAlert("something went wrong")
            }
        )
}