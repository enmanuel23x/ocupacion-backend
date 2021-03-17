module.exports = {
    check: (array) =>{
        let response = true
        if(array.length > 0){
            for (let index = 0; index < array.length; index++) {
                if(array[index] == undefined || array[index] == null){
                    response = false;
                    break;
                }
            }
        }else{
            response = false
        }
        return response
    }
}