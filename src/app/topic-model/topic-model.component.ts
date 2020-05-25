import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-topic-model',
  templateUrl: './topic-model.component.html',
  styleUrls: ['./topic-model.component.css']
})
export class TopicModelComponent{

  @Input() public topicData;

  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(){

    console.log(this.topicData)

  }  

  passBack() {
    this.activeModal.close(this.topicData);
    }
     

}

