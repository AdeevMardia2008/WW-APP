class Donate {

    constructor() {
      this.title1=createElement('h2');
      this.title2=createElement('h4');
      this.item1=createCheckbox("Electronics",false);
      this.item2=createCheckbox("Garments and Footwear",false);
      this.item3=createCheckbox("Household Items",false);
      this.item4=createCheckbox("Electronics",false);
      this.item5=createCheckbox("Electronics",false);
      this.item6=createCheckbox("Electronics",false);
      this.item7=createCheckbox("Electronics",false);
      this.item8=createCheckbox("Electronics",false);
      this.item9=createCheckbox("Electronics",false);
      this.donateButton=createButton('Donate')
    }
    hide(){
        this.title1.hide();
        this.title2.hide();
        
        this.donateButton.hide()
    }
  
    display()
    {
      this.title1.html("Please Select atleast one item to Donate");
      this.title1.position(displayWidth/2 , displayHeight/2);
      this.title2.position(displayWidth/2 - 85, displayHeight/2 - 350)
      this.donateButton.position(displayWidth/2 - 85, displayHeight/2 - 350);
      this.item1.position(100,100);
      this.donateButton.mousePressed(()=>{
        donateScreen.hide();
        
        //dateScreen=new Date();
        //dateScreen.display();
      })
    }
  }
  