class Yay {

    constructor() {
      this.continueButton = createButton('Continue');
      this.title2 = createElement('h1');
      this.title1 = createElement('h1');
      this.text = createElement('h2');
    }
    hide(){
      this.continueButton.hide();
      this.title1.hide();
      this.title2.hide();
      this.text.hide();
    }
  
    display()
    {
      this.title1.html("Congratulations!");
      this.title1.position(displayWidth/2 - 80, displayHeight/2 - 400);

      this.title2.html("Your Account has Successfully been Created");
      this.title2.position(displayWidth/2 - 250, displayHeight/2 - 350);

      this.continueButton.position(displayWidth/2 - 5, displayHeight/2 - 200);

      this.text.html("Please click CONTINUE to select what to Donate");
      this.text.position(displayWidth/2 - 200, displayHeight/2 - 300);

      this.continueButton.mousePressed(()=>{
        yayScreen.hide();
        loginScreen=new Login();
        loginScreen.display();
      })
    }
  }
  