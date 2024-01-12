(() => {
    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit2( fruit: string ): boolean {
        return ['manzana', 'cereza', 'ciruela'].includes(fruit);
    }
    const isRedFruit = (fruit: string): boolean =>
        ['manzana', 'cereza', 'ciruela'].includes(fruit);

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    type FruitColor = 'red'|'yellow'|'purple';
    function getFruitsByColor( color: FruitColor ): string[] {
        // if ( color === 'red' ) return ['Sandía','Nanche'];
        // if ( color === 'yellow') return ['Mango','Piña'];
        // if ( color === 'purple') return ['Zarzamoras','Ciruelas'];
        // throw Error('the color must be: red, yellow, purple');
        const fruitsByColor = {
            red:    ['Sandía','Nanche'],
            yellow: ['Mango','Piña'],
            purple: ['Zarzamoras','Ciruelas'],
        }
        if ( !Object.keys( fruitsByColor ).includes(color) )
            throw Error('the color must be: red, yellow, purple');
            
        return fruitsByColor[color];
    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps(): string{
        //let success = "Working properly";
        let success: boolean = false;
        if (!isFirstStepWorking) return 'First step broken.'; 
        if (!isSecondStepWorking) return 'Second step broken.';
        if (!isThirdStepWorking) return 'Third step broken.';
        if (!isFourthStepWorking) return 'Fourth step broken.';
        return 'Working properly!';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();