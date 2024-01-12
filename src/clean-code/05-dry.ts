type Size = ''|'S'|'M'|'L';
class Product {
    /**
     *
     */
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ) { }

    isProductReady(): boolean {
        for (const key in this){
            // console.log(key);
            switch (typeof this[key]){
                case 'string':
                    if ((<string>this[key]).length <= 0) throw Error(`${key} is empty`);
                case 'number':
                    if ((<number>this[key]) <= 0) throw Error(`${key} is zero`);
                default: throw Error(`${key} is not valid`);
            }
        }
        return true;
    }

    toString(): string {
        // NO DRY
        // if (this.name.length <= 0) throw Error('Name is empty');

        // DRY
        // for (const key in this){
        //     // console.log(key);
        //     switch (typeof this[key]){
        //         case 'string':
        //             if ((<string>this[key]).length <= 0) throw Error(`${key} is empty`);
        //         case 'number':
        //             if ((<number>this[key]) <= 0) throw Error(`${key} is zero`);
        //         default: throw Error(`${key} is not valid`);
        //     }
        // }

        return `${this.name}`;
    }
}
(() => {
    const bluePants = new Product('Hola soy un pan', 10, 'S');
    console.log(bluePants.toString());
})();