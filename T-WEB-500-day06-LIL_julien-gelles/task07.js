export function arrayFiltering(array, test) {
    let newarray = []
    for (let index = 0; index < array.length; index++) {
        if(test(array[index])) newarray.push(array[index])
    }
    return newarray
}
