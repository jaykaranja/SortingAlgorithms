function mergeSort(arr) {
    if (arr.length <= 1) return;
    var middle = arr.length / 2;
    var left = [];
    var right = [];

    for (let index = 0; index < arr.length; index++) {
        if (index < middle) {
            left.push(arr[index])
        } else {
            right.push(arr[index])
        }
        
    }

    mergeSort(left)
    mergeSort(right)
    merge(left, right, arr)

    return arr;

}

function merge(left, right, arr) {
    let leftSize = arr.length / 2;
    let rightSize = arr.length - leftSize;
    let i = l = r = 0;

    while (l < leftSize && r < rightSize) {
        if(left[l] < right[r]){
            arr[i] = left[l];
            l++;
            i++;

        } else {
            arr[i] = right[r];
            r++;
            i++;
        }
    }

    while (l < leftSize) {
        arr[i] = left[l];
        l++;
        i++;

    }

    while (r < rightSize) {
        arr[i] = right[r];
        r++;
        i++;

    }

}


console.log(mergeSort([5,6,9,2,1,7,10,4]));