import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SettingsComponent } from './settings.component';

const routes: Routes = [
    {
        path: ':settingsSectionName/:addonUUID/:slugName',
        // component: SettingsComponent,
        children: [
            // {
            //     path: ':form_key',
            //     loadChildren: () => import('./editor-form/editor-form.module').then(m => m.EditorFormModule)
            // },
            {
                path: '',
                loadChildren: () => import('./editor-list/editor-list.module').then(m => m.EditorListModule),
            },
            {
                path: 'view',
                loadChildren: () => import('./rl-abi/rl-abi.module').then(m => m.ListPageBlockModule),
            },
            {
                path: 'lists',
                loadChildren: () => import('./lists-abi/lists-abi.module').then(m => m.ListPageBlockModule),
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }



