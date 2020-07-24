//Given object

const student = {
    name: "Helsinki",
    age: 24,
    projects:{
        diceGame: "Two player dice game using Javascript"
     }
    }

    //Accesing properties of object without destructuring

    const name1 = student.name;
    const age1  = student.age;
    const diceGame1 = student.projects.diceGame;

    console.log(name1,age1,diceGame1);

    //Accessing properties of object with destructuring

    const {name,age} = student;
    const {diceGame} = student.projects;//Object within a object so assigned seperately.
    console.log(name,age,diceGame);
