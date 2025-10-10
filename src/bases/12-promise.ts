const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(100)
        // reject('Mi amigo me estafo')
    }, 2000)
})

myPromise
    .then((myMoney) => {
    console.log(`Tengo de vuelta mis ${myMoney} dólares`);
})
    .catch((reason) => {
        console.warn(reason)
    })
    .finally(() => {
        console.log('A seguir con mi vida');
        
    })