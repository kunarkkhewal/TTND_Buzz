import axiosInstance from '../utils/axiosInterceptor';

// POST REQUEST FOR BUZZ

export const addBuzzFeedToState = (data) => {
    console.log("buzz action add");
    return {
        type: "ADD_BUZZ",
        data
    }
}

export const addBuzz = formData => dispatch => {
    axiosInstance({
        method: 'post',
        url: 'http://localhost:5000/dashboard/buzz',
        data: formData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
        .then(res => {
            if (res.data.message === 'data saved') {
                console.log('data saved to server and comeback');
                dispatch(addBuzzFeedToState(res.data.data)); //.data from route
            }
        });
}


// GET REQUEST FOR BUZZ FEED

export const getBuzzFeedToState = (data) => {
    console.log("buzz action show");
    return {
        type: "SHOW_BUZZ",
        data
    }
}

export const showBuzz = () => dispatch => {
    axiosInstance({
        method: 'GET',
        url: 'http://localhost:5000/dashboard/buzz',
    })
        .then(res => {
            console.log('data fetched from server');
            dispatch(getBuzzFeedToState(res.data));
        });
}
