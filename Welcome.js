class Welcome {

    constructor() {
      this.loginButton = createButton('Login');
      this.joinUsButton=createButton('Join Us');
      this.accountTitle = createElement('h2');
      this.title = createElement('h1');
      
    }
    hide(){
      this.loginButton.hide();
      this.joinUsButton.hide();
      this.accountTitle.hide();
      this.title.hide();
    }
  
    display()
    {
      this.title.html("Join our Community to make the World a Better Place");
      this.title.position(displayWidth/2 - 400, 200);
      this.accountTitle.html("Account:");
      this.accountTitle.position(displayWidth/2 - 50, displayHeight/2 - 150)
      this.loginButton.position(displayWidth/2 - 30, displayHeight/2 - 90);
      this.joinUsButton.position(displayWidth/2 - 36,displayHeight/2 - 60);
      this.joinUsButton.mousePressed(()=>{
        welcomeScreen.hide();
        signUpScreen=new SignUp();
        signUpScreen.display();
      })
      this.loginButton.mousePressed(()=>{
        welcomeScreen.hide();
        loginScreen=new Login();
        loginScreen.display();
      })
    }
  }
  