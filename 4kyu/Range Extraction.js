function solution(list){
    let result = '';
    let range = [list[0]];
    for(let i = 1; i < list.length; i++) {
        if(list[i] - range[range.length - 1] === 1) {
            range.push(list[i]);
            if(i === list.length - 1) {
                if(range.length < 3) result += range.join();
                else result += `${range[0]}-${list[i]}`;
            }
        }
        else {
            if(range.length < 3) result += range.join() + ",";
            else result += `${range[0]}-${range[range.length - 1]},`;
            
            if(i === list.length - 1) result += list[i];
            range = [list[i]];
        }
    }
    return result;
}