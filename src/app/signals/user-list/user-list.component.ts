import { Component, input, computed, effect, signal } from "@angular/core";
import { ModifiedUser, User } from "src/app/models";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
  imports: [],
  standalone: true,
})
export class UserlistComponent {
  public usersList = input.required({
    alias: "users",
    transform: concatUserNames,
  });
  private query = signal("");

  filteredUsers = computed(() =>
    this.usersList().filter(({ displayName }) =>
      displayName.startsWith(this.query())
    )
  );

  updateQuery(e: Event) {
    console.log("Updating query", (e.target as HTMLInputElement).value);
    this.query.set((e.target as HTMLInputElement).value);
  }
}

function concatUserNames(users: User[]): ModifiedUser[] {
  return users.map(({ name, lastName, ...users }) => ({
    ...users,
    displayName: `${name} ${lastName}`,
  }));
}
