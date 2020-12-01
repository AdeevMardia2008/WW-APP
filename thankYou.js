class ThankYou {

    constructor() {
      this.continueButton = createButton('Proceed to next Donation');
      this.title1 = createElement('h1');
    }
    hide(){
      this.continueButton.hide();
      this.title1.hide();
    }
  
    display()
    {
      this.title1.html("Thank You for Donating your item(s)!");
      this.title1.position(displayWidth/2 - 80, displayHeight/2 - 400);

      this.continueButton.position(displayWidth/2 - 5, displayHeight/2 - 200);

      this.continueButton.mousePressed(()=>{
        thankYouScreen.hide();
        donateScreen=new Donate();
        donateScreen.display();
      })
    }
  }
  