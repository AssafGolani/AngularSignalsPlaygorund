import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserlistComponent } from "./user-list.component";
import { Component } from "@angular/core";
import { User } from "src/app/models";
import { By } from "@angular/platform-browser";

describe("UserListComponent", () => {
  @Component({
    imports: [UserlistComponent],
    standalone: true,
    template: `<app-user-list [users]="users" />`,
  })
  class TestHost {
    users: User[] = [];
  }

  it(`should render users from the input`, () => {
    const testUser = {
      id: 1,
      name: "Test",
      lastName: "Lastname",
      username: "testname",
    };
    const fixture = TestBed.createComponent(TestHost);

    fixture.componentInstance.users = [testUser];
    fixture.detectChanges();
    const rows = fixture.debugElement.queryAll(By.css("li"));

    expect(rows.length).toBe(1);
    expect(rows[0].nativeElement.innerText).toContain("Test Lastname");
  });
});
