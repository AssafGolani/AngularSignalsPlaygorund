import { Component } from "@angular/core";
import { UserlistComponent } from "./signals/user-list/user-list.component";
// import { DefaultComponent } from "./default/default.component";
// import { SignalsComponent } from "./signals/signals.component";
import { User } from "./models";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  standalone: true,
  imports: [UserlistComponent],
})
export class AppComponent {
  users: User[] = [
    { id: 1, name: "Michael", lastName: "Scott", username: "michael.scott" },
    { id: 2, name: "Dwight", lastName: "Schrute", username: "dwight.schrute" },
    { id: 3, name: "Angela", lastName: "Martin", username: "angela.martin" },
    { id: 4, name: "Jim", lastName: "Halpert", username: "jim.halpert" },
  ];

  addUser() {
    this.users = [
      {
        id: 5,
        name: "Andy",
        lastName: "Bernard",
        username: "andy.bernard",
      },
      ...this.users,
    ];
    console.log("Current Users", this.users);
  }
}
