export interface IIdResponse {
  a_Id: string;
}

export interface IPwdResponse {
  a_Idx: number;
}

export type TOptionList = {
  color: string | null;
  colorCode: string | null;
  option: string | null;
  optionPrice: number | null;
  optionCnt: number | null;
};
export interface IProdResponse {
  p_Category: string;
  p_Thumbnail: string[];
  p_Name: string;
  p_Cost: number;
  p_Sale: boolean;
  p_Discount: number;
  p_Option: TOptionList[];
  p_Desc: string;
  p_Content: string;
}

export type TError = { errorMessage: string };
export interface IProductsResponse {
  productList: IProduct[];
}

export interface IProduct {
  p_No: number;
  p_Name: string;
}

export interface IReportResponse {
  cnt: number;
  list: IList[];
}

export interface IList {
  keyword: string;
  k_Click: number;
  k_Cost: number;
  k_Trans: number;
  p_Price: number;
}

export interface INewOrdersRes {
  newOrders: number;
}
export interface ILastSalesRes {
  lastSales: number;
}
export interface IOnProductRes {
  productsCnt: number;
}
export interface IKeywordsRes {
  keywords: string[];
}
interface ISummary {
  adCost: number;
  month: string;
  salesCost: number;
}
export interface IAdSummaryRes {
  data: ISummary[];
}
export interface IBizMoneyRes {
  a_Charge: number;
}

//배송관리 조회
export interface IServiceList {
  id: number;
  o_No: number;
  p_No: number;
  p_Name: string;
  p_Cnt: number;
  u_Id: string;
  d_Name: string;
  d_Address1: string;
  d_Address2: string;
  d_Address3: string;
  d_Phone: string;
  d_Memo: string;
  o_Date: string;
  o_Status: string;
  p_Option: TOptionList[];
  p_Price: number;
}
export interface IServiceResponse {
  cnt: number;
  list: IServiceList[];
}
