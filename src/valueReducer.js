export const typesValueReducer = {
    "EMPTY_VALUE_INPUT": "empty_value_input",
    "ADD_VALUE_INPUT": "add_value_input"
}

export function valueReducerEmpty() {
    return (
        {
            type: typesValueReducer.EMPTY_VALUE_INPUT
        }
    )
}

export function valueReducerAdd(action) {
    return (
        {
            type: typesValueReducer.ADD_VALUE_INPUT,
            payload: action
        }
    )
}

function valueReducer(value = "", action) {
    switch (action.type) {
        case typesValueReducer.EMPTY_VALUE_INPUT:
            return ""

        case typesValueReducer.ADD_VALUE_INPUT:
            return (
                action.payload
            )

        default:
            return value
    }
}

export default valueReducer;