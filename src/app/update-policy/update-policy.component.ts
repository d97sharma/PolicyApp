import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PolicyDetails } from '../models';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-update-policy',
  templateUrl: './update-policy.component.html',
  styleUrls: ['./update-policy.component.scss']
})
export class UpdatePolicyComponent implements OnInit {

   updateForm : FormGroup = new FormGroup({});

  constructor(private _policyService : PolicyService) { }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
    policy_Id :new FormControl(),
    dateOfPurchase  : new FormControl(),
    customer_Id  : new FormControl(),
    fuel  : new FormControl(),
    vehicleSegment  :new FormControl(),
    premium  : new FormControl(),
    injuryLiability  : new FormControl(),
    personal  : new FormControl(),
    property  :new FormControl(),
    collision  : new FormControl(),
    comprehensive  : new FormControl(),
    gender  : new FormControl(),
    incomeGroup  : new FormControl(),
    customerRegion  : new FormControl(),
    maritalStatus  : new FormControl(),
   });
  }

  UpdatePolicy(input : any)
  {
    console.log(input);
    input.maritalStatus = input.maritalStatus == 0 ? false : true;
    console.log(this.updateForm.value);
    this._policyService.UpdatePolicy(input, input.policy_Id).subscribe(
      (data:PolicyDetails) =>{
        alert("Updated policy");
      },
      (error : any)  => alert("Error updating the record - Wrong policy number given")
    );
  }

}
