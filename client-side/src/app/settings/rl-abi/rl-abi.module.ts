import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageBlockComponent } from './rl-abi.component';
import { PepButtonModule } from '@pepperi-addons/ngx-lib/button';
import { PepIconRegistry, pepIconSystemClose } from '@pepperi-addons/ngx-lib/icon';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PepSelectModule } from '@pepperi-addons/ngx-lib/select';

const pepIcons = [
    pepIconSystemClose,
];

export const routes: Routes = [
    {
        path: '',
        component: ListPageBlockComponent
    }
];

@NgModule({
    declarations: [
        ListPageBlockComponent
    ],
    imports: [
        CommonModule,
        PepSelectModule,
        // HttpClientModule,
        // PepNgxLibModule,
        // PepSizeDetectorModule,
        // PepIconModule,
        // PepDialogModule,
        // PepTopBarModule,
        // PepMenuModule,
        // PepPageLayoutModule,
        PepButtonModule,
        // PepTextboxModule,
        // PepGenericListModule,
        TranslateModule.forChild(),
        RouterModule.forChild(routes)
    ],
    exports:[ListPageBlockComponent]
})
export class ListPageBlockModule {
    // constructor(
    //     private pepIconRegistry: PepIconRegistry,
    // ) {
    //     this.pepIconRegistry.registerIcons(pepIcons);
    // }
}