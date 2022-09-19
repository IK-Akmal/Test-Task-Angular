import { Component, Input } from "@angular/core";
import TransactionInterface from "src/app/shared/types/transaction.interface";


@Component({
    selector: 'app-table[transactions]',
    templateUrl: './table.component.html',
})

export class TableComponent {
    @Input('transactions') transactionsProps!: TransactionInterface[];
}