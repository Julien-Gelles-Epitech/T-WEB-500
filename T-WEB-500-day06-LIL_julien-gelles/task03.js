export function countGs(str) {
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        if (str[index] === 'G') {
            count += 1;
        }
    }
    return count
}