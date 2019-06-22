import axiosInstance from '../utils/axiosInterceptor';

// GET REQUEST FOR COMPLAINT LIST

const getComplaintListToState = data => {
    console.log("resolve action show:");
    return{
        type: "SHOW_COMPLAINT",
        data
    }
}

export const showComplaintList = () => dispatch => {
    axiosInstance({
        method: 'GET',
        url: 'http://localhost:5000/dashboard/resolve',
    })
        .then(res => {
            console.log('data fetched from db');
            dispatch(getComplaintListToState(res.data))
        })
}

// PATCH REQUEST FOR STATUS CHANGE

const updateComplaintInState = data => {
    console.log("resolve action status update:");
    return{
        type: "UPDATE_COMPLAINT_STATUS",
        data
    }
}

export const updateComplaint = updatedData => dispatch => {
    axiosInstance({
        method: 'PATCH',
        url: 'http://localhost:5000/dashboard/resolve',
        data: updatedData
    })
        .then(res=>{
            console.log("complaint updated");
            dispatch(updateComplaintInState(res.data))
        })
}