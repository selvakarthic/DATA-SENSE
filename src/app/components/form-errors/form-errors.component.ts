
import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { ExceptionHandler } from "src/app/shared/Exception_Handler";
@Component({
  selector: "app-form-errors",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./form-errors.component.html",
  styleUrls: ["./form-errors.component.css"],
})
@ExceptionHandler
export class FormErrorsComponent implements OnInit {
  @Input() formController: any = null;
  @Input() customErrorMessage : string = "" ;
  @Input() submitted: boolean = false;
  @Input() isRequiredErr: boolean = false;
  @Input() customMobileErrorMessage : string = "" ;
  
  constructor() {}

  ngOnInit(): void {}
 
}
