const initialState = {
    resolveList: []
}

export default function ResolveReducer(state = initialState, action) {
    let type = action.type;

    switch (type) {
        case "SHOW_COMPLAINT": {
            return {
                ...state,
                resolveList: action.data
            };
        }

        case "UPDATE_COMPLAINT_STATUS": {
            
            state.resolveList.filter(element => {
                if (action.data.issueId === element.issueId) {
                    element = action.data;
                    return{
                        ...state,
                        resolveList: action.data
                    }
                }
            })


            return state;
        }

        default: {
            return state;
        }
    }
}