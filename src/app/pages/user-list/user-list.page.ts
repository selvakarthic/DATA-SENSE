import { Component, OnInit } from '@angular/core';
import { REGISTERED_USERS } from '../login/login-data';
import { UtilFunctions } from 'src/app/shared/commonFunc';
import { APP_PATH } from 'src/app/shared/constant';
import { ExceptionHandler } from 'src/app/shared/Exception_Handler';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.css'],
})
@ExceptionHandler
export class UserListPage {

  users = REGISTERED_USERS;
  itemsPerPage = 5;
  totalPages: number;
  currentPage = 1;
  paginatedUsers: any[];
  allUsers : any[] = REGISTERED_USERS ;

  constructor(
    private util : UtilFunctions
  ) {
    this.calculateTotalPages();
    this.paginate();
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.users.length / this.itemsPerPage);
  }

  paginate() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedUsers = this.users.slice(startIndex, endIndex);
  }

  changePage(offset: number) {
    this.currentPage += offset;
    this.paginate();
  }

  editUser(userID)
  {
    this.util.navigate(APP_PATH.ADD_USER, { 'id' : userID });
  }

  deleteUser(userID)
  {
    this.users = this.users.filter(user => user.id != userID);
    this.paginate();
    this.calculateTotalPages();
  }

  searchUser(event)
  {
    let value = event.target.value ;
    if(value) {
      this.users = this.allUsers.filter(user => 
        user.address.toLowerCase().includes(value.toLowerCase()) || 
        user.email.toLowerCase().includes(value.toLowerCase()) || 
        user.mobileNumber.toLowerCase().includes(value.toLowerCase()) ||
        user.name.toLowerCase().includes(value.toLowerCase()) ||
        user.pincode.toLowerCase().includes(value.toLowerCase())
      );
    }
    else {
      this.users = this.allUsers;
    }
    this.paginate();
    this.calculateTotalPages();
  }

}
