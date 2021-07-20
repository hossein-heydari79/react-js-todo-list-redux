export const typesDataReducer = {
    "ADD": "add",
    "NEW_DATA": "newdata"
}

export function dataReducerNewDara(action) {
    return (
        {
            type: typesDataReducer.NEW_DATA,
            payload: action
        }
    )
}

export function dataReducerAdd(action) {
    return (
        {
            type: typesDataReducer.ADD,
            payload: action
        }
    )
}

function dataReducer(data = [], action) {
    switch (action.type) {
        case typesDataReducer.ADD: {
            let newData = [...data];
            newData.push(action.payload);
            return newData;
        }

        case typesDataReducer.NEW_DATA: {
            return action.payload
        }


        default:
            return data
    }
}


export default dataReducer