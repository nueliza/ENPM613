export function setData(data){
    console.log("Here", data);
    return {
        type: 'GET_DATA',
        data
    }
}
