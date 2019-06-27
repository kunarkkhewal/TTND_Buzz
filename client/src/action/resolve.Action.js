import axiosInstance from '../utils/axiosInterceptor';
import {
    SHOW_COMPLAINT,
    UPDATE_COMPLAINT_STATUS
} from './actionType'
import { DASHBOARD_RESOLVE_URL } from './actionURL'

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
        })
        .catch(res => {
            console.log("Error occured while updating complaints", res.err)
        })
}