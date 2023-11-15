const Util = {

    IsNullOrWhiteSpace : function(val){
        if(val === undefined || val === null || val.trim() === '') return true;
        return false;
    }

}

export {Util};