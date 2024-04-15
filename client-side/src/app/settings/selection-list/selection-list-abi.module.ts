import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionListPageBlockComponent } from './selection-list-abi.component';
import { PepButtonModule } from '@pepperi-addons/ngx-lib/button';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PepSelectModule } from '@pepperi-addons/ngx-lib/select';

export const routes: Routes = [
    {
        path: '',
        component: SelectionListPageBlockComponent
    }
];

@NgModule({
    declarations: [
        SelectionListPageBlockComponent
    ],
    imports: [
        CommonModule,
        PepSelectModule,
        PepButtonModule,
        TranslateModule.forChild(),
        RouterModule.forChild(routes)
    ],
    exports:[SelectionListPageBlockComponent]
})
export class SelectionListPageBlockModule {
}