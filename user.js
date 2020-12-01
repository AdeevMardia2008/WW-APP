class User {

    constructor() {
      /*this.submitButton = createButton('Submit');
      this.title2 = createElement('h2');
      this.title1 = createElement('h1');
      this.name = createInput('Name');
      this.age = createInput('Age');
      this.gender = createRadio();
      this.gender.option('Male');
      this.gender.option('Female');
      this.email = createInput('Email');
      this.phone = createInput('Phone No.');
      this.phoneText1 = createElement('h5');
      this.phoneText2 = createElement('h5');
      this.adress = createInput('Address');
      this.adressText = createElement('h5');*/
      this.userID = null;
      this.password = null;
      //this.passwordText = createElement('h5');
      //this.confirmPassword = createInput('Confirm Password','password');
    }
    updateUser(){
        var userIndex = "users/"+this.userID;
        database.ref(userIndex).set({
          userID:this.userID,
          password:this.password
        });
      }
}