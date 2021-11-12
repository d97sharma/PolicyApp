import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../policy.service';
import { FormGroup, FormControl } from '@angular/forms';
import { PolicyDetails,GenderDataVisualiser, ChartDataModel } from '../models';

@Component({
  selector: 'app-data-visualizer',
  templateUrl: './data-visualizer.component.html',
  styleUrls: ['./data-visualizer.component.scss']
})
export class DataVisualizerComponent implements OnInit {

  constructor(private _policyService : PolicyService) { }

  chartForm : FormGroup ;
  ngOnInit(): void {
    this.chartForm = new FormGroup({
      region: new FormControl()
   });
  }

  chartData : PolicyDetails[] ;
  showChart : boolean = false;
  showSpinner : boolean = false;
  barChartData : ChartDataModel[];
  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];
  barChartLabels = []
  ChartData(input : any)
  {
    this.showSpinner = true;
    this._policyService.GetPoliciesByRegion(this.chartForm.value.region)
      .subscribe(data => this.chartData = data);
      if(this.chartData.length > 0)
      {
        this.showSpinner = false;
        console.log(this.chartData);
        var male : number = 0;
        var female : number = 0;
        this.chartData.forEach(element => {
          if(element.gender == "Male"){
            male++;
          }
          else{
            female++;
          }
        });
        this.barChartData  =  [{ name: "Male", value: male },
                              { name: "Female", value: female }];
        this.showChart = true;
      }
      else
      {
        this.showSpinner = false;
        alert("No records found");
      }
  }

}
