function bubbleSort(array){
    let swapped;

    do {
        swapped = false;
        for (let index = 0; index < array.length-1; index++) {
            if (array[index] > array[index+1]) {
                let temp = array[index]
                array[index] =array[index+1]
                array[index+1] = temp
                swapped = true;
            }
            
        }
    } while(swapped);

    return array;
}

array = [64,74,3,6,7,9,12]

let solution = bubbleSort(array)

console.log(solution)
