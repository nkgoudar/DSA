const charCount = function (str) {
    const res = {};
    const len = str.length;
    for(let i=0; i<len; i++) {
        if(str[i] == " ") continue;
        if(res[str[i]]) res[str[i]]++;
        else res[str[i]] = 1;
    }
    return res;
}

charCount("dsds dsd")
