export default (store) => {
    return (next) => {
        return (action) => {
            const {callAPI} = action;
            if (!callAPI) {
                return next(action);
            }
            fetch(callAPI)
                .then((res) => {
                    return res.json();
                })
                .then((response) => {
                    return next({...action, response: response});
                });
        }
    }
}