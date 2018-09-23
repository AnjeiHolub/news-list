export default (store) => {
    return (next) => {
        return (action) => {
            console.log(1);
            next(action);
        }
    }
}