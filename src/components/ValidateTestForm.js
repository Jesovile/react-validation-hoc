export const ValidateTestForm = (props, state) => {

    let result;
    if(!state.name) {
        result = [
            {field: "NAME: ", message: "Missing required field"}
            ]
    }
    return result;
};