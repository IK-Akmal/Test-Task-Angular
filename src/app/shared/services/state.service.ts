import { Injectable } from "@angular/core";
import TransactionsInterface from "src/app/shared/types/transactions.interface";
import { data as initializeData } from 'src/assets/data';
import { TransactionType } from "../types/transaction.type";


@Injectable()
export class StateService {
    data: TransactionsInterface = initializeData
    transactionTypes: TransactionType[] = ["income", "outcome", "loan", "investment"]
}