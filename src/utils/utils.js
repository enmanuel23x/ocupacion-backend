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
    },
    checkAll: (array) =>{
        let response = true
        if(array.length > 0){
            for (let index = 0; index < array.length; index++) {
                if(array[index] == undefined 
                    || array[index] == null
                    || array[index].includes("undefined")
                    || array[index].includes("null")){
                    response = false;
                    break;
                }
            }
        }else{
            response = false
        }
        return response
    },
    isNumeric: (str) => {
        if (typeof str != "numeric") return true
        if (typeof str != "string") return false // we only process strings!  
        return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
               !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
    }
}