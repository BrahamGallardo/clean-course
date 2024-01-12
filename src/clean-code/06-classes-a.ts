(() => {

    //No aplicando el principio de responsabilidad unica
    type Gender = 'M' | 'F';
    class Person {

        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date,
        ) { }
    }

    //const newPerson = new Person("Abraham", 'M', new Date("1997-11-13"));
    //console.log({newPerson});
    class User extends Person {
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }
        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date) {
            super(email, role, name, gender, birthdate)
        }
    }

    const userSettings = new UserSettings(
        'usr/home',
        '/home',
        'agallardo@tekssolutions.com',
        'Admin',
        'Fernando',
        'M',
        new Date('2031-05-05')
    );
    console.log({userSettings})

})();