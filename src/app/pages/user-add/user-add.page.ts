import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UtilFunctions } from 'src/app/shared/commonFunc';
import { APP_PATH } from 'src/app/shared/constant';
import { FormValidators } from 'src/app/shared/form-validators';
import { CITY_LIST, DISTRICT_LIST, HOBBY_LIST, REGISTERED_USERS, STATE_LIST, USER_MODEL } from '../login/login-data';
import { ExceptionHandler } from 'src/app/shared/Exception_Handler';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.page.html',
  styleUrls: ['./user-add.page.css'],
})
@ExceptionHandler
export class UserAddPage implements OnInit {

  addUserForm : FormGroup ;
  isFormSubmitted : boolean = false ;
  selectedUser : USER_MODEL;
  stateLs = STATE_LIST ;
  districtLs = DISTRICT_LIST ;
  cityLs = CITY_LIST;
  hobbyLs :any[]= []
  isEnableDistrict : boolean = false;
  isEnableCity : boolean = false ;
  constructor(
    private util : UtilFunctions,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.addUserForm = new FormGroup({
      name : new FormControl('',Validators.compose([Validators.required,FormValidators.userName])),
      dob : new FormControl('',Validators.required),
      gender : new FormControl('',Validators.required),
      state : new FormControl('',Validators.required),
      district : new FormControl('',Validators.required),
      city : new FormControl('',Validators.required),
      email : new FormControl('',Validators.compose([Validators.required,FormValidators.email])),
      mobile : new FormControl('',Validators.compose([Validators.required,FormValidators.mobile])),
      pincode : new FormControl('',Validators.compose([Validators.required,FormValidators.pincode])),
      password : new FormControl('',Validators.compose([Validators.required,FormValidators.password])),
      hobbies : new FormControl('',Validators.required),
      picture : new FormControl('',Validators.required),
    });
    this.hobbyLs = HOBBY_LIST ;
    this.checkEditFlow();
  }

  checkEditFlow()
  {
    this.route.queryParams.subscribe(param =>
      {
        if (param && param['id'])
        {
          this.selectedUser = REGISTERED_USERS.filter(user => user.id == param['id'])[0];
          this.setFormData();
        }
      })
  }

  setFormData()
  {
    this.addUserForm.patchValue( {
      name : this.selectedUser.name ,
      email : this.selectedUser.email ,
      mobile : this.selectedUser.mobileNumber ,
      pincode : this.selectedUser.pincode ,
      password : this.selectedUser.password ,
    });
  }

  addUser()
  {
    this.isFormSubmitted = true ;
    if(this.addUserForm.valid){
      this.util.navigate(APP_PATH.USERS);
    }
  }

  onStateChange(event)
  {
    if(event.target.value) {
      if(event.target.value == 23) {
        this.isEnableDistrict = true ;
        this.addUserForm.controls['district'].enable();
      }
      else {
        this.isEnableDistrict = false ;
        this.addUserForm.controls['district'].disable();
      }
    } 
  }

  onDistrictChange(event)
  {
    if(event.target.value) {
      if(['4','8'].includes(event.target.value)) {
        this.isEnableCity = true;
        this.addUserForm.controls['city'].enable();
      }
      else {
        this.isEnableCity = false;
        this.addUserForm.controls['city'].disable();
      }
    }
  }

}
