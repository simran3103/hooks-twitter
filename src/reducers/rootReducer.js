const initialState = {
    name: "",
    password: "",
};


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "NAME":
            console.log("nnnnnaaaaammmmee");
            return { ...state, name: "", };
        case "PASSWORD":
            console.log("paaassssss");
            return { ...state, password: "", };
        case "LOGIN":
            console.log("btn");
            return { ...state, name: "", password: "", };
        default:
            return state;
    }
}
export default rootReducer;
