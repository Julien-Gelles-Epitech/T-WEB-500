export function fizzBuzz(num) {
    let strG = ""
    for (let index = 1; index < num+1; index++) {
        let strT = "";
        if (index%3 == 0) strT += "Fizz";
        if (index%5 == 0) strT += "Buzz";
        if (strT == "") strG += index;
        else strG += strT;
        if (index != num) strG += ", ";
    }
    console.log(strG);
}
