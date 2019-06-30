import axiosInstance from '../utils/axiosInterceptor';
import {
    SHOW_COMPLAINT,
    UPDATE_COMPLAINT_STATUS, 
    DASHBOARD_RESOLVE_URL
} from '../utils/constants'
import { successAlert, errorAlert } from '../utils/alerts'

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
        url: `${DASHBOARD_RESOLVE_URL}`,
    })
        .then(res => {
            dispatch(getComplaintListToState(res.data))
        })
        .catch(res => {
            console.log("Error occured while fetching complaints", res.err)
            errorAlert("Something went wrong while Getting Complaints")
        })
}

// PATCH REQUEST FOR STATUS CHANGE

const updateComplaintInState = data => {
    return {
        type: UPDATE_COMPLAINT_STATUS,
        data
    }
}

export const updateComplaint = updatedData => dispatch => {
    axiosInstance({
        method: 'PATCH',
        url: `${DASHBOARD_RESOLVE_URL}`,
        data: updatedData
    })
        .then(res => {
            dispatch(updateComplaintInState(res.data))
            successAlert("Status Updated successfully")
        })
        .catch(res => {
            console.log("Error occured while updating complaints", res.err)
            errorAlert("Something went wrong while updating complaint")
        })
}