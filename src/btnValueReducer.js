export const typesBtnValueReducer = {
    "ADD_BTN_VALUE": "add_btn_value",
    "EDIT_BTN_VALUE": "edit_btn_value"
}

export function btnValueReducerEdit() {
    return (
        {
            type: typesBtnValueReducer.EDIT_BTN_VALUE
        }
    )
}

export function btnValueReducerAdd() {
    return (
        {
            type: typesBtnValueReducer.ADD_BTN_VALUE,
        }
    )
}


function btnValueReducer(btnValue = "ADD", action) {
    switch (action.type) {
        case typesBtnValueReducer.ADD_BTN_VALUE: {
            return "ADD"
        }

        case typesBtnValueReducer.EDIT_BTN_VALUE:
            return "EDIT"
        default:
            return btnValue;
    }
}

export default btnValueReducer