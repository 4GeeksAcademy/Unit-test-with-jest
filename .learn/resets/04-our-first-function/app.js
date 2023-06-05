const product = (a,b) => {
    return a * b
}

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to yen
    let valueInYen = (valueInDollar/1.2)*127.9;
    //return the dollar value
    return valueInYen;
}




module.exports = { product, fromEuroToDollar, fromDollarToYen };
