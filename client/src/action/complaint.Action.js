import axiosInstance from '../utils/axiosInterceptor';
import { 
    ADD_COMPLAINT,
    SHOW_COMPLAINT
} from "./actionType";
import {DASHBOARD_COMPLAINT_URL } from './actionURL'

// POST REQUEST FOR COMPLAINT

const addComplaintToState = data => {
    console.log("complaint action add:");
    return {
        type: ADD_COMPLAINT,
        data
    }
}

export const addComplaint = complaintData => dispatch => {
    axiosInstance({
        method: 'post',
        url: `${DASHBOARD_COMPLAINT_URL}`,
        data: complaintData,
        config: {headers: {'Content-Type': 'multipart/form-data'}}
    })
        .then(res=>{
            console.log("in action add complaint, res.data, ", res)
            // if(res.data.message === 'data saved'){
                console.log('data saved to server and came back');
                dispatch(addComplaintToState(res.data));
            // }
        });
}


// GET REQUEST FOR COMPLAINT LIST

const getComplaintListToState = data => {
    console.log("complaint action show:");
    return{
        type: SHOW_COMPLAINT,
        data
    }
}

export const showComplaintList = () => dispatch => {
    axiosInstance({
        method: 'GET',
        url: `${DASHBOARD_COMPLAINT_URL}`,
    })
        .then(res => {
            console.log('data fetched from db');
            dispatch(getComplaintListToState(res.data))
        })
}