class WebDev {
  developerNmae: string;
  experienceYear: number;
  language: string;

  constructor(developerNmae: string, experienceYear: number, language: string) {
    this.developerNmae = developerNmae;
    this.experienceYear = experienceYear;
    this.language = language;
  }

  printLanguage() {
    console.log("Language is: ", this.language);
  }
}

class FrontEnd extends WebDev {
  uiFramework: string;

  constructor(
    developerNmae: string,
    experienceYear: number,
    language: string,
    uiFramework: string,
  ) {
    super(developerNmae, experienceYear, language);
    this.uiFramework = uiFramework;
  }

  printLanguage(): void {
    console.log(`${this.developerNmae} uses JavaScript for Frontend development.`);
  }

  modifyUserInterface(): void {
    console.log(`${this.developerNmae} is modifying the UI using ${this.uiFramework}.`);
  }
}

class BackEnd extends WebDev {
  databaseSystem: string;

  constructor(
    developerNmae: string,
    experienceYear: number,
    language: string,
    databaseSystem: string,
  ) {
    super(developerNmae, experienceYear, language);
    this.databaseSystem = databaseSystem;
  }

  printLanguage(): void {
    console.log(`${this.developerNmae} uses .NET for Backend development.`);
  }

  modifyDatabaseSchema(): void {
    console.log(`${this.developerNmae} is optimizing the ${this.databaseSystem} database layout.`);
  }
}

const dev1 = new FrontEnd("Alice", 3, "JS", "React");
dev1.printLanguage();
dev1.modifyUserInterface();

const dev2 = new BackEnd("Bob", 5, ".NET", "SQL Server");
dev2.printLanguage();
dev2.modifyDatabaseSchema();
