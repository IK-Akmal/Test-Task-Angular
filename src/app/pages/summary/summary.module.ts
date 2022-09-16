import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StateService } from "src/app/shared/services/state.service";
import { CardComponent } from "./components/card/card.component";
import { SummaryComponent } from "./components/summary/summary.component";

const routes: Routes = [
    {
        path: '',
        component: SummaryComponent
    },
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        SummaryComponent,
        CardComponent,
    ],
    providers: [StateService]
})
export class SummaryModule {

}