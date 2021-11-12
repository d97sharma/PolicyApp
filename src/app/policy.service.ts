import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {PolicyDetails} from '../app/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http: HttpClient) { }

  private _url = "https://localhost:44326/api/PolicyDetails";
  private _cust_url = "https://localhost:44326/api/PolicyDetails/PolicyByCustomerID";
  private _region_url = "https://localhost:44326/api/PolicyDetails/PolicyByRegion";


  GetPolicyByPolicyNumber(id:number)
  {
    return this.http.get<PolicyDetails>(this._url+ '/' +id);
  }

  DeletePolicyByPolicyID(id:number)
  {
    return this.http.delete(this._url+'/'+id);
  }

  PostPolicy(input : PolicyDetails)
  {
    return this.http.post<PolicyDetails>(this._url, input,{
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    });
  }

  UpdatePolicy(input : PolicyDetails , policyNumber : number)
  {
    return this.http.put<PolicyDetails>(this._url + '/' + policyNumber, input,{
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    });
  }

  GetPolicyByCustomerId(id : number)
  {
    return this.http.get<PolicyDetails[]>(this._cust_url+ '/' +id);
  }

  GetPoliciesByRegion(region : string)
  {
    return this.http.get<PolicyDetails[]>(this._region_url+ '/' +region);
  }
}
