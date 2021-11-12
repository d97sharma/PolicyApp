import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../policy.service';
import { FormGroup, FormControl } from '@angular/forms';
import { PolicyDetails } from '../models';

@Component({
  selector: 'app-search-policy',
  templateUrl: './search-policy.component.html',
  styleUrls: ['./search-policy.component.scss']
})
export class SearchPolicyComponent implements OnInit {

  constructor(private _policyService : PolicyService) { }
  searchForm : FormGroup = new FormGroup({});
  showTable : boolean = false ;
  TableData : PolicyDetails ;
  CustomerData : PolicyDetails[] ;
  showSpinner : boolean = false;

  DataSource : any[] = [];
  //displayedColumns = ['policy_Id','DateOfPurchase','Customer_Id','Fuel','VehicleSegment','Premium','InjuryLiability','Personal','Property','Collision','Comprehensive','Gender','IncomeGroup','CustomerRegion','MaritalStatus'];
  displayedColumns = ['policy_Id','dateOfPurchase','customer_Id','fuel','vehicleSegment','premium','injuryLiability','personal','property','collision','comprehensive','gender','incomeGroup','customerRegion','maritalStatus'];

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      number: new FormControl(),
      searchType: new FormControl()
   });
  }

  SearchPolicy(dataa :any)
  {
    this.showSpinner = true;
    try{
      console.log("entered");
      if(this.searchForm.value.searchType == "Policy")
      {
        this._policyService.GetPolicyByPolicyNumber(this.searchForm.value.number)
        .subscribe(data => this.TableData = data);
        if(this.TableData.gender)
        {
          this.showSpinner = false;
          this.showTable = true;
          console.log(this.TableData);
          this.DataSource.push(this.TableData);
        }
        else
        {
          this.showSpinner = false;
          alert("No records found");
        }
      } 
      else
      {
        this._policyService.GetPolicyByCustomerId(this.searchForm.value.number)
        .subscribe(data => this.CustomerData = data);
        if(this.CustomerData.length > 0)
        {
          this.showSpinner = false;
          this.showTable = true;
          console.log(this.TableData);
          this.DataSource = this.CustomerData;
        }
        else
        {
          this.showSpinner = false;
          alert("No records found");
        }
      }
    }
    catch{
      this.showSpinner = false;
      alert("No records found");
    }
    
  }

}
