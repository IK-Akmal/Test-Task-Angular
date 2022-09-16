import { Component, Input } from "@angular/core";
import { TransactionType } from "src/app/shared/types/transaction.type";



@Component({
    selector: 'app-card[type][tabIndex]',
    templateUrl: './card.component.html'
})
export class CardComponent {
    @Input('type') typeProps!: TransactionType
    @Input('tabIndex') tabIndexProps!: number
}