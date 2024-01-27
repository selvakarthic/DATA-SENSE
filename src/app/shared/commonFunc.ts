import { Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { ExceptionHandler } from "./Exception_Handler";

@Injectable({
    providedIn: "root",
})
@ExceptionHandler
export class UtilFunctions
{
    constructor(private navControl : NavController){}

    async navigate(pUrl, pQueryParams?, state?, replaceUrl?)
    {
      await this.navControl.navigateRoot([pUrl], {queryParams: pQueryParams,state: state,replaceUrl: replaceUrl});
    }

}