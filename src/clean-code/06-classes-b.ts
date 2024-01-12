(() => {

    //No aplicando el principio de responsabilidad unica
    //Priorizar la composición frente a la herencia
    type Gender = 'M' | 'F';
    interface PersonProps {
        name: string;
        gender: Gender;
        birthDate: Date;
    }
    class Person {
        public name: string;
        public gender: Gender;
        public birthDate: Date;
        constructor({ name, gender, birthDate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
        }
    }

    //User 1
    // interface UserProps {
    //     email: string;
    //     role: string;
    // }
    // class User extends Person {
    //     public email: string;
    //     public role: string;
    //     public lastAccess: Date;
    //     constructor({ email, role }: UserProps, {name, gender, birthDate}: PersonProps) {
    //         super({name, gender, birthDate});
    //         this.email = email;
    //         this.role = role;
    //         this.lastAccess = new Date();
    //     }
    //     checkCredentials() {
    //         return true;
    //     }
    // }

    //User 2
    interface UserProps {
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthDate: Date;
    }
    class User extends Person {
        public email: string;
        public role: string;
        public lastAccess: Date;
        constructor({ email, role, name, gender, birthDate }: UserProps) {
            super({ name, gender, birthDate });
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }
        checkCredentials() {
            return true;
        }
    }


    //UserSettings
    interface UserSettingsProps {
        birthDate: Date
        email: string,
        gender: Gender,
        lastOpenFolder: string,
        name: string,
        role: string,
        workingDirectory: string,
    }
    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor({ workingDirectory, lastOpenFolder, email, role, name, gender, birthDate }: UserSettingsProps) {
            super({ email, role, name, gender, birthDate });
            this.workingDirectory = workingDirectory
            this.lastOpenFolder = lastOpenFolder
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: 'usr/home',
        lastOpenFolder: '/home',
        email: 'agallardo@tekssolutions.com',
        role: 'Admin',
        name: 'Fernando',
        gender: 'M',
        birthDate: new Date('2031-05-05')}
    );
    console.log({ userSettings })

})();