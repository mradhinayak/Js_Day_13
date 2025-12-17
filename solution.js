// Sorts an array of numbers in ascending order using the selection sort algorithm
function selectionSortAsc(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}
console.log(selectionSortAsc([7, 2, 9, 4, 1]));



// Sorts an array of numbers in descending order using the selection sort algorithm
function selectionSortDesc(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let maxIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }
        if (maxIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
        }
    }
    return arr;
}
console.log(selectionSortDesc([7, 2, 9, 4, 1]));




// find Kth smallest element in an array using selection sort
function findKthSmallest(arr, k) {
    for (let i = 0; i < k; i++) {
        let maxIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }
        if (maxIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
        }
    }
    return arr[k - 1];
}
console.log(findKthSmallest([7, 2, 9, 4, 1], 3));



// Selection sort but Track index of minimum for each pass;
function selectionSortAscTrackIndex(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }

        console.log(`Pass ${i + 1}: Min index = ${minIndex}, Array: [${arr}]`);
    }
    return arr;
}
console.log([7, 2, 9, 4, 1])
console.log(selectionSortAscTrackIndex([7, 2, 9, 4, 1]));



// Sort an array of object by name;
function selectionSortAnArrOfObjByName(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j].name.toLowerCase() < arr[minIndex].name.toLowerCase()) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}
console.log(selectionSortAnArrOfObjByName([
    { name: "Bob" },
    { name: "Alice" },
    { name: "Jorge" },
    { name: "Elon" }
]));