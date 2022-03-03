const handlerPromise = (promise) => {
    return promise
        .then((data) => [null, data])
        .then((erorr) => [erorr, undefined]);
};

modele.exports = handlerPromise;