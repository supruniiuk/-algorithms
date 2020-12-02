/**
 * search for a substring in a string
 *
 * @param t table for needle(letters inside)
 * @param {number} ind, index for searching a substring
 * @return {number} k, index of the first occurrence of needle in haystack
 */
var table = function(needle){
    len = needle.length;
    let arr = new Array(len+1);

    for(let i = len - 2; i >= 0; i--){
        if(arr.indexOf(needle[i]) == -1){
            arr[len-i-1] = needle[i];
        }
    }

    if(arr.indexOf(needle[len-1]) == -1){
        arr[len] = needle[len-1];
    }

    return arr;
};

var checked = function(haystack, needle, table, j){
    if(table.indexOf(haystack[j]) == -1){
        return needle.length;
    }
    else{
        return table.indexOf(haystack[j]);
    }
}

var strStr = function(haystack, needle) {
    let t = table(needle);
    answer = str(t, haystack, needle);
    if(answer == undefined){
        console.log(-1);
    }
    else{
        console.log(answer);
    }
};

var str = function(t, haystack, needle) {
    ind = (needle.length-1);
    needleEnd = (needle.length-1);
    indicator = 0;

    while(ind < haystack.length){
        if(haystack[ind] !== needle[needleEnd]){
            ind += checked(haystack, needle, t, ind);
        }
        else{
            temp = needleEnd;
            k = ind;
            for(k = ind; temp >= 0; k--){
                if(haystack[k] === needle[temp]){
                    temp--;
                    indicator += 1;
                }
                else{
                    ind += checked(haystack, needle, t, ind);
                    indicator = 0;
                    break;
                }
            }
            if(indicator == needle.length){
                delete temp;
                delete indicator;
                delete needleEnd;
                delete ind;
                delete t;
                return k + 1;
            }
        } 
    }
}
