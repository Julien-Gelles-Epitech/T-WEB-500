export function objectsDeeplyEqual(cmp1, cmp2) {
    let ent1 = Object.keys(cmp1)
    let ent2 = Object.keys(cmp2)
    if (ent1.length !== ent2.length) return false;
    for (let index = 0; index < ent1.length; index++) {
        if (ent1[index] !== ent2[index]) return false;       
    }

    
    for (let index = 0; index < ent1.length; index++) {
        if ((typeof cmp1[ent1[index]] === "object") && (typeof cmp2[ent2[index]]  === "object") && (cmp1[ent1[index]] !== null) && (cmp2[ent2[index]] !== null)){
            if (! objectsDeeplyEqual(cmp1[ent1[index]], cmp2[ent2[index]])) return false;
        }else{
            if (cmp1[ent1[index]] !== cmp2[ent2[index]]) return false;
        }    
    }

    
    return true;
}