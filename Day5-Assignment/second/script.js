class User {

    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }

    static greet(){
        console.log("Hello There");
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }

    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }

    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }

    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email}`);
        return this;
    }

}

class Moderator extends User{

    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    getDetails(user){
        console.log("Name is "+user.name+ ", email is "+user.email);
        return this;
    }

    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email; 
        })
        console.log(user.name+ " has been deleted by "+ mod.role);
    }

    addCoins(user){
        this.luCoins++;
        console.log(user.name+ ` has ${this.luCoins} coins`);
        return this;
    }

    deleteCoins(user){
        this.luCoins--;
        console.log(user.name+ ` has ${this.luCoins} coins`);
        return this;
    }

}

class Admin extends Moderator{
   addCourse(user,course){
       user.courses.push(course);
       console.log(course + " course has been sucessfully added for "+ user.name);
   }

   deleteCourse(user,course){
    user.courses = user.courses.filter(courses => courses !== course);
    console.log(course + " course has been sucessfully deleted for "+ user.name);
    return this;
}
}

let user1 = new User('Abel',21,'abel@gmail.com');
let user2 = new User('Benny',23,'benny@gmail.com');
let mod = new Moderator('Caroline',24,'caroline@gmail.com','Moderator');
let admin = new Admin('Sachin',27,'sachin@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});

User.greet();
user1.login();
user1.logout();

admin.addCourse(user1,'Javascript');
admin.addCourse(user2,'BlockChain');
admin.addCourse(user1,'Python');
admin.deleteCourse(user1,'Python');

mod.addCoins(user1).addCoins(user2).deleteCoins(user1);
mod.getDetails(user2);
mod.deleteUser(user1);

