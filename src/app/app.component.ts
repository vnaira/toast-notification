import { Component } from '@angular/core';
import { NotificationService } from "./service/notification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toastr-notify';

  constructor(private notifyService: NotificationService) {
  }

  showToasterSuccess(){
    this.notifyService.showSuccess("Data shown successfully !!", "success")
  }

  showToasterError(){
    this.notifyService.showError("Something is wrong", "")
  }

  showToasterInfo(){
    this.notifyService.showInfo("This is info", "")
  }

  showToasterWarning(){
    this.notifyService.showWarning("This is warning", "")
  }
}
