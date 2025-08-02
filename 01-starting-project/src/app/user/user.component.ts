import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) isSelected!: boolean;
  @Output() select = new EventEmitter<string>();

  // avatar = input.required<string>()
  // name = input.required<string>()

  get imagePath() {
    return `assets/users/${this.user.avatar}`
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
