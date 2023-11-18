
const Util = {};

Util.IsNullOrWhiteSpace = (val)=>{
    if(val === undefined || val === null || val.trim() === '') return true;
    return false;
}

Util.SetLocal = (name, value, isObj)=>{
    if(isObj) value = JSON.stringify(value);
    localStorage.setItem(name, value);
}

Util.GetLocal = (name, isObj) => {
    const item = localStorage.getItem(name);
    if(isObj) return JSON.parse(item);
    return item;
}

Util.RemoveLocal = (name)=>{
    localStorage.removeItem(name);
}

Util.Message = (callBack) => {

    // 1. 메세지 창 띄우기

    // 2. 예, 아니오에 클릭 이벤트 달기


}

Util.SetRecentItem = (id)=>{
    let arrWatch = Util.GetLocal('watched', true);
    let findIdx = arrWatch.findIndex(x=> x.toString() === id.toString());
    if(findIdx > -1){
        arrWatch.splice(findIdx,1);
    }
    arrWatch.push(id);

    // 최근 본 3개만 출력
    if(arrWatch.length > 3) arrWatch = arrWatch.slice(-3);
    
    Util.SetLocal('watched', arrWatch, true);
}

export {Util};