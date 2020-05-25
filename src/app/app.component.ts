import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TopicModelComponent } from './topic-model/topic-model.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularAssess1';
  days: Day[] = [];
  dayCounter: number = 1;
  disabled: boolean = true;
    
  addDay() {
    let day = new Day();
    day.name = "Day " + this.dayCounter;
    this.days.push(day);
    this.dayCounter++;
    document.getElementById("addTopic").hidden = false;
  }

  deleteDay(){
    
//     const index = days.indexOf();
// if (index > -1) {
//   days.splice(index, 1);
// }
    this.days.pop();
  }
  
  topicData = {
    title: 'title1',
    type: 'type 1',
    content: 'content1',
    instructions: 'instructions'

  }
  constructor(private modalService: NgbModal) { }

  viewTopicModel() {
    //this.modalService.open(TopicModelComponent);
    event.preventDefault();

    const modalRef = this.modalService.open(TopicModelComponent);
    modalRef.componentInstance.topicData = this.topicData;

    modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
      console.log(receivedEntry);
      })
    
  }

  topicsToAdd(event){
    alert('hi')
  }

}
export class Topic {
  title: string;
  type: string;
  content: string;
  instructions: string;
}

export class Day {
  name: string;
  topics: Topic[] = [];
}
