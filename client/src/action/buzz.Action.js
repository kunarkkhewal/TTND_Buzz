import axios from 'axios';

export const addBuzzFeedToState = (data) => {
    console.log("buzz action");
    return {
        type: "BUZZ_FEED",
        data
    }
}

export const addBuzz = formData => dispatch => {
    axios({
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

