(() => {

    //No aplicando el principio de responsabilidad unica
    //Priorizar la composición frente a la herencia

    // #region Person
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
    // #endregion
    
    //#region User
    interface UserProps {
        email: string;
        role: string;
    }
    class User {
        public email: string;
        public role: string;
        public lastAccess: Date;
        constructor({ email, role }: UserProps) {
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }
        checkCredentials() {
            return true;
        }
    }
    //#endregion

    //#region Settings
    interface SettingsProps {
        lastOpenFolder: string,
        workingDirectory: string,
    }
    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor({ workingDirectory, lastOpenFolder}: SettingsProps) {
            this.workingDirectory = workingDirectory
            this.lastOpenFolder = lastOpenFolder
        }
    }
    //#endregion

    //#region UserSettings
    interface UserSettingsProps {
        birthDate: Date
        email: string,
        gender: Gender,
        lastOpenFolder: string,
        name: string,
        role: string,
        workingDirectory: string,
    }
    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;
        constructor({birthDate, email, gender, lastOpenFolder, name, role, workingDirectory}: UserSettingsProps) {
            this.person = new Person({name, gender, birthDate});
            this.user = new User({email, role});
            this.settings = new Settings({lastOpenFolder, workingDirectory});
        }
    }
    //#endregion

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