import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PepAddonBlockLoaderService } from '@pepperi-addons/ngx-lib/remote-loader';
import { ListsContainers } from './lists_containers';


@Component({
    selector: 'lists-abi',
    templateUrl: './lists-abi.component.html',
    styleUrls: ['./lists-abi.component.scss']
})

export class ListsPageBlockComponent extends ListsContainers implements OnInit {

    listABIDialogRef: MatDialogRef<any>;

    options: { key: string; value: string }[] = [
        { key: 'items_BasicView', value: '1. Items View - Basic' },
        { key: 'accounts_BasicView', value: '2. Accounts View - Basic' },
        { key: 'accounts_BasicWithDefaultDraw', value: '3. Accounts Basic View with Default Draw' },
        { key: 'accounts_SelectionTypeMulti', value: '4. Accounts with Selection Type "Multi"' },
        { key: 'accounts_SelectionTypeSingle', value: '5. Accounts with Selection Type "Single"' },
        { key: 'accounts_SelectionTypeNone', value: '6. Accounts with Selection Type "None"' },
        { key: 'accounts_Menu', value: '7. Accounts with Menu' },
        { key: 'accounts_MenuHostingAddonFunc', value: '8. Accounts with Menu of Hosting Addon Func' },
        { key: 'accounts_MenuFull', value: '9. Accounts with Menu - Full' },
        { key: 'accounts_LineMenu', value: '10. Accounts with Line Menu' },
        { key: 'items_LineMenuSelectionTypeMulti', value: '11. Items with Line Menu & Selection "Multi"' },
        { key: 'items_Search', value: '12. Items with Search' },
        { key: 'accounts_SmartSearch', value: '13. Accounts with Smart Search' },
        { key: 'accounts_SortingAscending', value: '14. Accounts with Sorting - Ascending' },
        { key: 'accounts_SortingDescending', value: '15. Accounts with Sorting - Descending' },
        { key: 'items_SearchString', value: '16. Items with Search String' },
        { key: 'items_PageTypePages', value: '17. Items with Page Type "Pages"' },
        { key: 'items_PageTypePages_PageSize', value: '18. Items with Page Type "Pages" & Page Size' },
        { key: 'items_PageTypePages_PageIndex', value: '19. Items with Page Type "Pages" & Page Index' },
        { key: 'items_PageTypePages_TopScrollIndex', value: '20. Items Page Type "Pages" & Top Scroll Index' },
        { key: 'items_PageTypePages_PageSizePageIndex', value: '21. Items with Page Type "Pages" & Page Size & Page Index' },
        { key: 'items_PageTypePages_PageSizePageIndexTopScrollIndex', value: '22. Items with Page Type "Pages" & Page Size & Page Index & Top Scroll Index' },
        { key: 'items_PageTypeScroll', value: '23. Items with Page Type "Scroll"' },
        { key: 'items_PageTypeScroll_TopScrollIndex', value: '24. Items with Page Type "Scroll" & Top Scroll Index' },
        { key: 'items_PageTypeScroll_PageIndex', value: '25. Items with Page Type "Scroll" & Page Index' },
        { key: 'items_PageTypeScroll_PageIndexTopScrollIndex', value: '26. Items with Page Type "Scroll" & Page Index & Top Scroll Index' },
        { key: 'items_PageTypeScroll_PageSizePageIndex', value: '27. Items with Page Type "Scroll" & Page Size & Page Index' },
        { key: 'items_PageTypeScroll_PageSizePageIndexTopScrollIndex', value: '28. Items with Page Type "Scroll" & Page Size & Page Index & Top Scroll Index' },
        { key: 'accounts_full', value: '29. Accounts View - Full' },
        { key: 'items_Full2Views', value: '30. Items View - Full with 2 Views' },
        { key: 'accounts_TestDrawGridRelation', value: '31. Accounts - Test Draw Grid Relation' },
        { key: 'referenceAccount_2Views', value: '32. ReferenceAccount with 2 Views' },
        { key: 'filtersAccRef_2Views', value: '33. FiltersAccRef with 2 Views' },
        { key: 'accounts_causedErrorInDrawFunc', value: '34. Accounts - throw Error due to wrong AddonUUID' },
        { key: 'arraysOfPrimitives', value: '35. Arrays Of Primitives - Test Draw Array' },
        { key: 'containedArray', value: '36. Contained Array - Test Draw Array' },
    ]

    chosenListContainer: string = 'items_BasicView'

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
        // alert("Hello! I am an alert box!!");
        const hostObject = {
            listContainer: this[this.chosenListContainer],
            inDialog: true
        }
        this.listABIDialogRef = this.addonBlockService.loadAddonBlockInDialog({
            name: 'SelectionList',
            hostObject: hostObject,
            container: this.viewContainerRef,
            hostEventsCallback: (event) => {
                switch (event.action) {
                    case 'on-done':
                        //debugger;
                        console.log('DONE CLICKED!');
                        console.info('event.data: ', JSON.stringify(event.data, null, 2));
                        alert(JSON.stringify(event.data, null, 2));
                        // this.listABIDialogRef.close(event.data);
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
        // alert(JSON.stringify(this.listABIDialogRef, null, 2))
    }
}