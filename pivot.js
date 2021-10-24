function quickSort(arr) {
    const leftArray = [];
    const rightArray =[];
    const pivot = arr[arr.length - 1];
    let i = 0;
    if(arr.length <= 1){
        return arr;
    }
    do {
        if(arr[i]< pivot){
            leftArray.push(arr[i])
        } else {
            rightArray.push(arr[i])
        }
        i++;
    } while(i<arr.length-1);
    return[...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

const testArray = [3, 23,1,900, 43, 56, 876, 4356, 2, 1, 39, 5, 64, 5, 100]
console.log(quickSort(testArray));