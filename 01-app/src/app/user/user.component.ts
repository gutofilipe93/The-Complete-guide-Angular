import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  @Input({required: true}) user!:{
    id: string,
    avatar: string,
    name: string
  }
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser (){
    this.select.emit(this.user.id);
  }
}
