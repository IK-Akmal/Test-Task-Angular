import { Component, OnInit } from "@angular/core";
import { StateService } from "src/app/shared/services/state.service";
import { TransactionType } from "src/app/shared/types/transaction.type";

import TransactionsInterface from "../../../../shared/types/transactions.interface";


@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit {

    data!: TransactionsInterface
    transactionTypes!: TransactionType[]

    constructor(
        private state: StateService
    ) { }

    ngOnInit(): void {
        this.initializeValues()
    }

    initializeValues(): void {
        this.data = this.state.data
        this.transactionTypes = this.state.transactionTypes
    }
}