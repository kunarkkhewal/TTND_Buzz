import axiosInstance from '../utils/axiosInterceptor';
import {
    ADD_COMPLAINT,
    SHOW_COMPLAINT
} from "./actionType";
import { DASHBOARD_COMPLAINT_URL } from './actionURL';
import {successAlert, errorAlert} from './actionAlert';

// POST REQUEST FOR COMPLAINT

const addComplaintToState = data => {
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
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
        .then(res => {
            dispatch(addComplaintToState(res.data));
            successAlert("Complaint Registered")
        })
        .catch(res => {
            console.log("Error occured in adding complaint", res.err)
            errorAlert("Something went wrong while Registering Complaint")
        });
}


// GET REQUEST FOR COMPLAINT LIST

const getComplaintListToState = data => {
    return {
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
            dispatch(getComplaintListToState(res.data))
        })
        .catch(res => {
            console.log('Error occured while fetching complaint', res.err)
            errorAlert("Something went wrong while Fetching Complaints")
        })
}