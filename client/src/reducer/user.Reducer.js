const initialState = {
    userData:[{username: '', role:''}]
}

export default function userReducer(state = initialState, action) {
    let type = action.type;

    switch (type) {
        case "SHOW_USER":{
            return{
                ...state,
                userData: [action.data, ...state.userData]
            };
        }

        default: {
            return state;
        }
    }
}