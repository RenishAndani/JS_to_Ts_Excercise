"use strict";
class WebDev {
    developerNmae;
    experienceYear;
    language;
    constructor(developerNmae, experienceYear, language) {
        this.developerNmae = developerNmae;
        this.experienceYear = experienceYear;
        this.language = language;
    }
    printLanguage() {
        console.log("Language is: ", this.language);
    }
}
class FrontEnd extends WebDev {
    uiFramework;
    constructor(developerNmae, experienceYear, language, uiFramework) {
        super(developerNmae, experienceYear, language);
        this.uiFramework = uiFramework;
    }
    printLanguage() {
        console.log(`${this.developerNmae} uses JavaScript for Frontend development.`);
    }
    modifyUserInterface() {
        console.log(`${this.developerNmae} is modifying the UI using ${this.uiFramework}.`);
    }
}
class BackEnd extends WebDev {
    databaseSystem;
    constructor(developerNmae, experienceYear, language, databaseSystem) {
        super(developerNmae, experienceYear, language);
        this.databaseSystem = databaseSystem;
    }
    printLanguage() {
        console.log(`${this.developerNmae} uses .NET for Backend development.`);
    }
    modifyDatabaseSchema() {
        console.log(`${this.developerNmae} is optimizing the ${this.databaseSystem} database layout.`);
    }
}
const dev1 = new FrontEnd("Alice", 3, "JS", "React");
dev1.printLanguage();
dev1.modifyUserInterface();
const dev2 = new BackEnd("Bob", 5, ".NET", "SQL Server");
dev2.printLanguage();
dev2.modifyDatabaseSchema();
