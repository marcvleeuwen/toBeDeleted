// Interfaces that represent SAP MemberDetailsResponse

import {BillingFrequencyType} from './billing-frequency.type';
import {BillingMethodType} from './billing-method.type';
import {CollectionType} from './collection-type.type';
import {MemberStatusType} from './member-status.type';
import {TransactionType} from './transaction-type.type';

export interface MemberDetailResponse {
  memberDetails: Array<MemberDetail>;
  monthlyBilling: Array<MonthlyBilling>;
  monthlyTotal: Array<MonthlyTotal>;
  totalOutstanding: Array<TotalOutstanding>;
}

export interface MemberDetail {
  billingFrequency?: BillingFrequencyType;
  billingMethod?: BillingMethodType;
  cardNumber?: number;
  collectionDate?: Date;
  collectionType?: CollectionType;
  contractAccount?: number;
  entityNumber?: number;
  insuranceObject?: string;
  linkedPerson?: string;
  memberName?: string;
  memberNumber?: number;
  memberStatus?: MemberStatusType;
  paymentReference?: number;
  productCode?: string;
  basketId?: string;
  scheme?: string;
  statementDate?: Date;
}

export interface MonthlyBilling {
  amount?: number;
  collectionType?: CollectionType;
  contractAccount?: number;
  dueDate?: Date | string;
  effectiveFrom?: Date | string;
  effectiveTo?: Date | string;
  insuranceObject?: string;
  invoiceDate?: Date | string;
  memberName?: string;
  month?: string;
  policy?: number;
  postingDate?: Date | string;
  receivableDocumentNumber?: number;
  paymentDocumentNumber?: string;
  receiptNumber?: string;
  systemDate?: Date | string;
  transactionType?: TransactionType | string;
  deferralDate?: Date | string;
}

export interface GroupMonthlyBilling extends MonthlyBilling {
  groupTitle?: string;
  groupTotalAmount?: number;
}

export interface MonthlyTotal {
  amount?: number;
  contractAccount?: number;
  insuranceObject?: string;
  month?: string;
}

export interface TotalOutstanding {
  contractAccount?: number;
  insuranceObject?: string;
  nextDebitOrder?: Date;
  outstandingAmt?: number;
  productCode?: string;
  basketId?: string;
  totalBilled?: number;
  totalDue?: number;
  totalPaid?: number;
}
