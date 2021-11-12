import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-delete-policy',
  templateUrl: './delete-policy.component.html',
  styleUrls: ['./delete-policy.component.scss']
})
export class DeletePolicyComponent implements OnInit {
  deleteForm : FormGroup = new FormGroup({});
  constructor(private _policyService : PolicyService) { }

  ngOnInit(): void {
    this.deleteForm = new FormGroup({
      policyNumber: new FormControl()
   });
  }

  DeletePolicy(input : any)
  {
    this._policyService.DeletePolicyByPolicyID(this.deleteForm.value.policyNumber)
    .subscribe(()=>alert("Policy Deleted Succesfully"),
    (err) => alert("Error occured - Policy does not exist")
    );
  }

}
