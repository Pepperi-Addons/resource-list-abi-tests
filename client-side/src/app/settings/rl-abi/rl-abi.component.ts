import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PepAddonBlockLoaderService } from '@pepperi-addons/ngx-lib/remote-loader';
import { ListContainers } from './list_containers';


@Component({
    selector: 'rl-abi',
    templateUrl: './rl-abi.component.html',
    styleUrls: ['./rl-abi.component.scss']
})

export class ListPageBlockComponent extends ListContainers implements OnInit {

    listABIDialogRef: MatDialogRef<any, any>

    options: { key: string; value: string }[] = [
        { key: 'itemsBasicView', value: 'Items View - Basic' },
        { key: 'accountsBasicView', value: 'Accounts View - Basic' },
        { key: 'accountsMenu', value: 'Accounts with Menu' },
        { key: 'accountsMenuHostingAddonFunc', value: 'Accounts with Menu of Hosting Addon Func' },
        { key: 'accountsMenuFull', value: 'Accounts with Menu - Full' },
        { key: 'accountsLineMenu', value: 'Accounts with Line Menu' },
        { key: 'itemsLineMenuSelectionTypeMulti', value: 'Items with Line Menu & Selection "Multi"' },
        { key: 'itemsSearch', value: 'Items with Search' },
        { key: 'accountsSmartSearch', value: 'Accounts with Smart Search' },
        { key: 'accountsSelectionTypeMulti', value: 'Accounts with Selection Type "Multi"' },
        { key: 'accountsSelectionTypeSingle', value: 'Accounts with Selection Type "Single"' },
        { key: 'accountsSelectionTypeNone', value: 'Accounts with Selection Type "None"' },
        { key: 'accountsSortingAscending', value: 'Accounts with Sorting - Ascending' },
        { key: 'accountsSortingDescending', value: 'Accounts with Sorting - Descending' },
        { key: 'accountsBasicWithDefaultDraw', value: 'Accounts Basic View with Default Draw' },
        { key: 'itemsPageTypePages', value: 'Items with Page Type "Pages"' },
        { key: 'itemsPageTypePages_PageSize', value: 'Items with Page Type "Pages" & Page Size' },
        { key: 'itemsPageTypePages_PageIndex', value: 'Items with Page Type "Pages" & Page Index' },
        { key: 'itemsPageTypePages_PageSizePageIndex', value: 'Items with Page Type "Pages" & Page Size & Page Index' },
        { key: 'itemsPageTypeScroll', value: 'Items with Page Type "Scroll"' },
        { key: 'itemsPageTypeScroll_PageIndex', value: 'Items with Page Type "Scroll" & Page Index' },
        { key: 'itemsPageTypeScroll_PageSizePageIndex', value: 'Items with Page Type "Scroll" & Page Size & Page Index' },
        { key: 'accountsFull', value: 'Accounts View - Full' },
        { key: 'filtersAccRef2Views', value: 'FiltersAccRef with 2 Views' },
    ]

    chosenListContainer: string = 'itemsBasicView'

    constructor(
        private addonBlockService: PepAddonBlockLoaderService,
        private viewContainerRef: ViewContainerRef
    ) {
        super()
    }

    ngOnInit(): void {
    }

    ngOnChanges() {
    }

    onOptionSelection(chosenKey) {
        console.log('chosenKey: ', chosenKey);
        this.chosenListContainer = chosenKey;
    }

    onClick() {
        // debugger
        const hostObject = {
            listContainer: this[this.chosenListContainer],
            inDialog: true
        }
        this.listABIDialogRef = this.addonBlockService.loadAddonBlockInDialog({
            name: 'List',
            hostObject: hostObject,
            container: this.viewContainerRef,
            hostEventsCallback: (event) => {
                switch (event.action) {
                    case 'on-done':
                        console.log('DONE CLICKED!');
                        console.info('event.data: ', JSON.stringify(event.data, null, 2));
                        this.listABIDialogRef.close(event.data);
                        break;
                    case 'on-cancel':
                        console.log('CANCEL CLICKED!');
                        this.listABIDialogRef.close();
                        break;
                    default:
                        break;
                }
            }
        })
    }
}