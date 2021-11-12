export interface PolicyDetails
{
    policy_Id  : number;
    dateOfPurchase  : string;
    customer_Id  : number;
    fuel  : string;
    vehicleSegment  : string;
    premium  : number;
    injuryLiability  : boolean;
    personal  : boolean;
    property  : boolean;
    collision  : boolean;
    comprehensive  : boolean;
    gender  : string;
    incomeGroup  : string;
    customerRegion  : string;
    maritalStatus  : boolean;
}


export interface GenderDataVisualiser
{
    male : number,
    female : number
}

export interface ChartDataModel
{
    name : string,
    value : number
}