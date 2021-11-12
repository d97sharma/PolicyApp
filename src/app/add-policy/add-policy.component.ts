import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { PolicyDetails } from '../models';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.scss']
})
export class AddPolicyComponent implements OnInit {

  addForm : FormGroup = new FormGroup({});

  constructor(private _policyService : PolicyService) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
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

  AddPolicy(input : any)
  {
    console.log(input);
    input.maritalStatus = input.maritalStatus == 0 ? false : true;
    console.log(this.addForm.value);
    this._policyService.PostPolicy(input).subscribe(
      (data:PolicyDetails) =>{
        alert("Data inserted");
      },
      (error : any)  => alert("Error inserting the record")
    );
  }
}
