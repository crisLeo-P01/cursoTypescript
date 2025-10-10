const dragonBall = ['Goku', 'Vegeta', 'Truncks']

 const [p1] = dragonBall;
 console.log(p1);

 const [, , p3] = dragonBall
 console.log(p3);

 dragonBall.push('Picoro')
 console.log(dragonBall);
 

 const returnArrayFn = () => {
    return ['ABC', 123] as const // as const para que no se pueda modificar. Es una estructura fija(tupla)
 }

 const [letters, numbers] = returnArrayFn()

 console.log(letters, numbers);

 console.log(numbers + 45);
 
 
 
 