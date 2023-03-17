function showSoft<T>(arr: T[], callback: (a: T, b: T) => T): T[] {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
                if (callback(arr[i], arr[j]) > 0) {
                    if (arr[i] > arr[j]) {
                        let temp = arr[i]
                        arr[i] = arr[j]
                        arr[j] = temp
                    }
                }
                else {
                    if (arr[i] < arr[j]) {
                        let temp = arr[i]
                        arr[i] = arr[j]
                        arr[j] = temp
                    }
                }
            
           
        }
    }
    return arr
}

const numArray3 = [3, 5, 2]
showSoft(numArray3, (a, b) => {
    return a - b
})
console.log(numArray3);

// numArray3.sort((a, b) => {
//     // return a - b
//     console.log(a - b);
    
//     return a - b
// })
