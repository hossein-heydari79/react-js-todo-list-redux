export const typesValueReducer = {
    "EMPTY": "empty",
    "ADD": "add"
}

export function valueReducerEmpty() {
    return (
        {
            type: typesValueReducer.EMPTY
        }
    )
}

export function valueReducerAdd(action) {
    return (
        {
            type: typesValueReducer.ADD,
            payload: action
        }
    )
}

function valueReducer(value = "", action) {
    switch (action.type) {
        case typesValueReducer.EMPTY:
            return ""

        case typesValueReducer.ADD:
            return (
                action.payload
            )

        default:
            return value
    }
}

export default valueReducer;