import { Component, computed, EventEmitter, Input, input, Output} from '@angular/core';

// type Userr = {
//     id: string;
//     avatar: string;
//     name: string;
//   }

interface Userrr {
      id: string;
      avatar: string;
      name: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // @Input({ required: true }) id!: string;
  // @Input({required:true}) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Input({ required: true }) user!: Userrr ;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();






  get imagePath() {
    return 'assets/users/'+this.user.avatar
  }

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
