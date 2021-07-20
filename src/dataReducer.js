function dataReducer(data = [], action) {
    switch (action.type) {
        case "add": {
            let newData = [...data];
            newData.push(action.payload);
            return newData;
        }

        case "newdata": {
            return action.payload
        }


        default:
            return data
    }
}


export default dataReducer