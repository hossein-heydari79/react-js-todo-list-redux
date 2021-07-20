export const typesDataReducer = {
    "ADD_DATA": "add_data",
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
            type: typesDataReducer.ADD_DATA,
            payload: action
        }
    )
}

function dataReducer(data = [], action) {
    switch (action.type) {
        case typesDataReducer.ADD_DATA: {
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