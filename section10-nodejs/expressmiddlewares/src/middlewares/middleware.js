exports.middleWareGlobal = (request, response, next) =>{
    next();
}

exports.outroMidd = (req, res, next) => {
    console.log('Outro midd')
    next();
}

/*sfha*/
