export const typesBtnValueReducer = {
    "ADD": "add",
    "EDIT": "edit"
}

export function btnValueReducerEdit() {
    return (
        {
            type: typesBtnValueReducer.EDIT
        }
    )
}

export function btnValueReducerAdd() {
    return (
        {
            type: typesBtnValueReducer.ADD,
        }
    )
}


function btnValueReducer(btnValue = "ADD", action) {
    switch (action.type) {
        case typesBtnValueReducer.ADD: {
            return "ADD"
        }

        case typesBtnValueReducer.EDIT:
            return "EDIT"
        default:
            return btnValue;
    }
}

export default btnValueReducer