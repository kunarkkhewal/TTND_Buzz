const initialState = {
    complaintList: []
}

export default function complaintReducer(state= initialState, action){
    let type = action.type;

    switch(type){
        case "ADD_COMPLAINT": {
            return{
                ...state,
                complaintList:[action.data, ...state.complaintList]
            };
        }

        default: {
            return state;
        }
    }
}