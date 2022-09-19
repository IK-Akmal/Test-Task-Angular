import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";
import { StateService } from "src/app/shared/services/state.service";
import TransactionInterface from "src/app/shared/types/transaction.interface";
import { TransactionType } from "src/app/shared/types/transaction.type";



@Component({
    selector: 'app-list',
    templateUrl: './navigator.component.html'
})
export class NavigatorComponent implements OnInit, OnDestroy {

    transactions!: TransactionInterface[]
    transcationsType!: TransactionType[]

    queryParamsSubscription!: Subscription;
    currentTab!: number;

    constructor(
        private route: ActivatedRoute,
        private state: StateService
    ) { }


    ngOnInit(): void {
        this.initializeListeners()
    }

    ngOnDestroy(): void {
        this.queryParamsSubscription.unsubscribe()
    }

    initializeListeners() {
        this.queryParamsSubscription = this.route.queryParams
            .subscribe((params: Params) => {
                this.currentTab = Number(params['tab'] ?? '0') ?? 0;
                this.initializeValues()
            })
    }

    initializeValues() {
        this.transcationsType = this.state.transactionTypes;
        this.transactions = this.state.data.data.filter(item => item.type === this.transcationsType[this.currentTab]);
    }

}