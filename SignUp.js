class SignUp {

    constructor() {
      this.submitButton = createButton('Sign Up');
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
      this.adressText = createElement('h5');
      this.userID = createInput('User ID');
      this.password = createInput('Password','password');
      this.passwordText = createElement('h5');
      this.confirmPassword = createInput('Confirm Password','password');
      this.text = createElement('h4')
    }
    hide(){
      this.submitButton.hide();
      this.title1.hide();
      this.title2.hide();
      this.name.hide();
      this.age.hide();
      this.gender.hide();
      this.email.hide();
      this.phone.hide();
      this.phoneText1.hide();
      this.phoneText2.hide();
      this.adress.hide();
      this.adressText.hide();
      this.userID.hide();
      this.password.hide();
      this.passwordText.hide();
      this.confirmPassword.hide();
      this.text.hide()
    }
  
    display()
    {
      this.title1.html("Sign Up");
      this.title1.position(displayWidth/2 - 35, displayHeight/2 - 400);

      this.title2.html("To show your Kindness");
      this.title2.position(displayWidth/2 - 85, displayHeight/2 - 350);

      this.submitButton.position(displayWidth/2 - 5, displayHeight/2 + 140);

      this.name.position(displayWidth/2 - 50, displayHeight/2 - 260);

      this.age.position(displayWidth/2 - 50, displayHeight/2 - 230);

      this.gender.position(displayWidth/2 - 50, displayHeight/2 -200);

      this.email.position(displayWidth/2 - 50, displayHeight/2 - 170);

      this.phone.position(displayWidth/2 - 50, displayHeight/2 - 140);

      this.phoneText1.position(displayWidth/2 - 30, displayHeight/2 - 130);
      this.phoneText1.html("(Enter 10 Digit Number)");
      
      this.phoneText2.position(displayWidth/2 - 80, displayHeight/2 - 110);
      this.phoneText2.html("(We will not trouble you with spam calls)");

      this.adress.position(displayWidth/2 - 50, displayHeight/2 - 70);
      this.adressText.position(displayWidth/2 - 115, displayHeight/2 - 67);
      this.adressText.html("(Currently, We are operational only in Chennai, TN,India)");

      this.userID.position(displayWidth/2 - 50, displayHeight/2 - 20);

      this.password.position(displayWidth/2 - 50, displayHeight/2 + 10);
      this.passwordText.position(displayWidth/2 - 30, displayHeight/2 + 15);
      this.passwordText.html("(Min 6 Characters)");
      this.confirmPassword.position(displayWidth/2 - 50, displayHeight/2 + 60);

      this.text.position(displayWidth/2 - 60, displayHeight/2 - 320);
      this.text.html("(Please fill up all the Details)");

      this.submitButton.mousePressed(()=>{
        signUpScreen.hide();
        //congratulationsScreen=new Yay();
        //congratulationsScreen.display();
        user=new User();
        user.userID=this.userID.value();
        user.password=this.password.value();
        user.updateUser();
      })
    }
  }
  