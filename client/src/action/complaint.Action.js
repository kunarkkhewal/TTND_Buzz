import axiosInstance from '../utils/axiosInterceptor';

// POST REQUEST FOR COMPLAINT

export const addComplaintToState = data => {
    console.log("complaint action add:");
    return {
        type: "ADD_COMPLAINT",
        data
    }
}

export const addComplaint = complaintData => dispatch => {
    axiosInstance({
        method: 'post',
        url: 'http://localhost:5000/dashboard/complaints',
        data: complaintData,
        config: {headers: {'Content-Type': 'multipart/form-data'}}
    })
        .then(res=>{
            if(res.data.message === 'data saved'){
                console.log('data saved to server and came back');
                dispatch(addComplaintToState(res.data.data));
            }
        });
}