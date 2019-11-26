console.log("This is tutorila about class");

class Employe {
    constructor(givenName, givenExperiance, givenDivision) {
        this.name = givenName;
        this.experiance = givenExperiance;
        this.division = givenDivision;
    }

    slogan() {
        return `This compnay best from  ${this.name}`;
    }
    static add(a,b){
        return a+b;
    }
}


class Programer extends Employe{
    constructor(givenName, givenExperiance, givenDivision,language){
        super(givenName,givenExperiance,givenDivision);
        this.language = language;
    }

    myfavLang(){
        if (this.language == "Python") {
            return "Python";
            
        }else{
            return "JavaScript";
        }
    
    }
    
    static multiply(a,b){
        return a*b;
    }

}


let myObj = new Employe("chetan", 3.8, "SQAE");
console.log(myObj);
console.log(myObj.slogan());
console.log(Employe.add(1,2));


let myProgObj = new Programer("Pravin",3.8,"SQAE","Python");
console.log(myProgObj);
console.log(myProgObj.myfavLang());
console.log(Programer.multiply(2,24));