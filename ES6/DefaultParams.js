// default param - is a standard practice used now to have a default value for the parameters

function Sum(p1=0, p2=0, p3=0) {
    //console.log(p3)
    // if (p1 && p2 && p3) {
    //     return p1+p2+p3    
    // }
    // else{
    //     return 0
    // }

    return p1+p2+p3
}

console.log(Sum())
console.log(Sum(1,2,3))
console.log(Sum(1,2))
console.log(Sum(1))


//create and example of multiplication using default params

// SOLUTION TO ABOVE PROBLEM

function multiplication(m1=0, m2=0, m3=0) {
    if(m1 && m2 && m3){
        return m1*m2*m3
    }
    if(m1 && m2){
        return m1*m2
    }
    if(m1){
        return m1
    }
    else{
        return 0
    }
}

console.log(multiplication())
console.log(multiplication(1,2,3))
console.log(multiplication(1,2))
console.log(multiplication(1))