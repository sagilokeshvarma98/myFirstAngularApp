import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
 
  constructor() { 
  }

  names = ['neil','mary','samsung','apple']

  changeDivCss = "box"
  changeTextCss = "text"
  
  
  @Input() titleName:any;
  @Input() titleContent:any;
  @Output('receivedData') senddata:EventEmitter<string>=new EventEmitter<string>()
  ngOnInit(): void {
   console.log(this.titleName,this.titleContent);
   
  }

  

  changeAll(){
    this.changeDivCss= this.changeDivCss=="box1"? "box" : "box1";
    this.changeTextCss= this.changeTextCss=="text"? "text1" : "text";
  }

  sendDataToParent(data:string){
    this.senddata.emit(data)
  }

}
