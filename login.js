class Login {

    constructor() {
      this.loginButton = createButton('Login');
      this.title2 = createElement('h2');
      this.title1 = createElement('h1');
      
      this.userID = createInput('User ID');
      this.password = createInput('Password','password');
      this.passwordText = createElement('h4');
    }
    hide(){
      this.loginButton.hide();
      this.title1.hide();
      this.title2.hide();
      this.userID.hide();
      this.password.hide();
      this.passwordText.hide();
    }
  
    display()
    {
      this.title1.html("Login");
      this.title1.position(displayWidth/2 - 35, displayHeight/2 - 400);

      this.title2.html("To get into your Account");
      this.title2.position(displayWidth/2 - 115, displayHeight/2 - 350);

      this.loginButton.position(displayWidth/2 - 5, displayHeight/2 - 140);

     this.userID.position(displayWidth/2 - 70, displayHeight/2 - 255);

      this.password.position(displayWidth/2 - 70, displayHeight/2 - 215);
      this.passwordText.position(displayWidth/2 - 150, displayHeight/2 - 200);
      this.passwordText.html("(Enter the Password you used to create your Account)");
      this.loginButton.mousePressed(()=>{
        loginScreen.hide();
        donateScreen=new Donate();
        donateScreen.display();
      })
    }
  }
  