import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StateService } from "src/app/shared/services/state.service";
import { NavigatorComponent } from "./components/navigator/navigator.component";
import { TableComponent } from "./components/table/table.component";

const routes: Routes = [
    {
        path: 'list',
        component: NavigatorComponent
    },
]


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        NavigatorComponent,
        TableComponent
    ],
    providers: [
        StateService
    ]
})
export class NavigatorModule {

}