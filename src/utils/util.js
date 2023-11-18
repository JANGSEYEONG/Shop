const Util = {

    IsNullOrWhiteSpace: function(val){
        if(val === undefined || val === null || val.trim() === '') return true;
        return false;
    },

    SetLocal: function(name, value, isObj){
        if(isObj) value = JSON.stringify(value);
        localStorage.setItem(name, value);
    },

    GetLocal: function(name, isObj){
        const item = localStorage.getItem(name);
        if(isObj) return JSON.parse(item);
        return item;
    },

    RemoveLocal: function(name){
        localStorage.removeItem(name);
    }

}

export {Util};