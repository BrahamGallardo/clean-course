(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    //#region HTMLElement
    class HtmlElement {
        constructor(
            public id: string,
            public type?: HtmlType,
        ) {}
    }
    //#endregion

    //#region InputAttributes
    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) { }
    }
    //#endregion

    //#region Events
    class InputEvents {
        constructor() {}
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }
    //#endregion

    //#region InputEvents
    class InputElement {
        public htmlElement: HtmlElement;
        public inputAttributes: InputAttributes;
        public events: InputEvents;
        constructor(value: string, placeholder: string, id: string) {
            this.htmlElement = new HtmlElement(id, 'input');
            this.events = new InputEvents();
            this.inputAttributes = new InputAttributes(value, placeholder);
        }
    }
    //#endregion

    //? Idea para la nueva clase InputElement

    const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

    console.log({ nameField });

})()