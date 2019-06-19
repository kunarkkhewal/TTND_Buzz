const initialState = {
    resolveList: []
}

export default function ResolveReducer(state= initialState, action){
    let type = action.type;

    switch(type){
        case "SHOW_COMPLAINT": {
            return {
                ...state,
                resolveList: action.data
            };
        }

        default: {
            return state;
        }
    }
}