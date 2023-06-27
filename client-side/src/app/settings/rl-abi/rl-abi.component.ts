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
        { key: 'items_BasicView', value: 'Items View - Basic' },
        { key: 'accounts_BasicView', value: 'Accounts View - Basic' },
        { key: 'accounts_TestDrawGrid', value: 'Accounts - Test Draw Grid' },
        { key: 'accounts_Menu', value: 'Accounts with Menu' },
        { key: 'accounts_MenuHostingAddonFunc', value: 'Accounts with Menu of Hosting Addon Func' },
        { key: 'accounts_MenuFull', value: 'Accounts with Menu - Full' },
        { key: 'accounts_LineMenu', value: 'Accounts with Line Menu' },
        { key: 'items_LineMenuSelectionTypeMulti', value: 'Items with Line Menu & Selection "Multi"' },
        { key: 'items_Search', value: 'Items with Search' },
        { key: 'accounts_SmartSearch', value: 'Accounts with Smart Search' },
        { key: 'accounts_SelectionTypeMulti', value: 'Accounts with Selection Type "Multi"' },
        { key: 'accounts_SelectionTypeSingle', value: 'Accounts with Selection Type "Single"' },
        { key: 'accounts_SelectionTypeNone', value: 'Accounts with Selection Type "None"' },
        { key: 'accounts_SortingAscending', value: 'Accounts with Sorting - Ascending' },
        { key: 'accounts_SortingDescending', value: 'Accounts with Sorting - Descending' },
        { key: 'accounts_BasicWithDefaultDraw', value: 'Accounts Basic View with Default Draw' },
        { key: 'items_PageTypePages', value: 'Items with Page Type "Pages"' },
        { key: 'items_PageTypePages_PageSize', value: 'Items with Page Type "Pages" & Page Size' },
        { key: 'items_PageTypePages_PageIndex', value: 'Items with Page Type "Pages" & Page Index' },
        { key: 'items_PageTypePages_TopScrollIndex', value: 'Items Page Type "Pages" & Top Scroll Index' },
        { key: 'items_PageTypePages_PageSizePageIndex', value: 'Items with Page Type "Pages" & Page Size & Page Index' },
        { key: 'items_PageTypePages_PageSizePageIndexTopScrollIndex', value: 'Items with Page Type "Pages" & Page Size & Page Index & Top Scroll Index' },
        { key: 'items_PageTypeScroll', value: 'Items with Page Type "Scroll"' },
        { key: 'items_PageTypeScroll_TopScrollIndex', value: 'Items with Page Type "Scroll" & Top Scroll Index' },
        { key: 'items_PageTypeScroll_PageIndex', value: 'Items with Page Type "Scroll" & Page Index' },
        { key: 'items_PageTypeScroll_PageIndexTopScrollIndex', value: 'Items with Page Type "Scroll" & Page Index & Top Scroll Index' },
        { key: 'items_PageTypeScroll_PageSizePageIndex', value: 'Items with Page Type "Scroll" & Page Size & Page Index' },
        { key: 'accounts_Full', value: 'Accounts View - Full' },
        { key: 'filtersAccRef_2Views', value: 'FiltersAccRef with 2 Views' },
        { key: 'referenceAccount_2Views', value: 'ReferenceAccount with 2 Views' },
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