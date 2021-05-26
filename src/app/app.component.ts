import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'testApp';
  background= '#E9E179'
  font="blue"
  result=""
  titleArray=['Numbers','Alphabets','Symbols','Buttons','conditions']
  titleContent = [[0,1,2,3,4,5],
                  ['a','s','d','f','g','h'],
                  ['!','@','#','$'],
                  ['Caps Lock','Tab','Ctrl','Enter','End','Shift'],
                  ['=','?','<','>']]

   receiveDataFromChild(index:number,value:any){
     console.log(index,value);
     this.result=this.titleArray[index]+" array consists of "+this.titleArray[index]+" : "+value
   }
}

