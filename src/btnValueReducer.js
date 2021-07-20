function btnValueReducer(btnValue = "ADD", action) {
    switch (action.type) {
        case "ADD": {
            return "ADD"
        }

        case "EDIT":
            return "EDIT"
        default:
            return btnValue;
    }
}

export default btnValueReducer