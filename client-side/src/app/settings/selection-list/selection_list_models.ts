import { SchemeFieldType } from "@pepperi-addons/papi-sdk";

export interface ListContainer {
    Layout?: Partial<ListLayout>;
    Data?: ListData;
    State?: Partial<ListState>;
    List?
}

export interface ListData {
    Items: RowData[];
    Count?: number
}


export interface ListLayout {
    Title: string;
    ViewsMenu: ViewsMenu;
    Menu: Menu;
    LineMenu: Menu;
    Search: Search;
    // SelectionType: SelectionType;
    SmartSearch: ListSmartSearch; // if empty array we will hide the smart search
    Sorting: Sorting;
    View: ViewLayout;
}

interface ViewsMenu {
    Visible: boolean;
    Items: { Key: string, Value: string }[];
}

interface Menu {
    Blocks: ListMenuBlock[];
}

export interface ListMenuBlock{
    Key: string;
    Title: string;
    // ButtonStyleType?: StyleType //if exist then this is a button
    DrawURL: string //route to cpi side function that takes prev state and curr state and draw the menu block
    AddonUUID: string //the addon uuid who supply the rendering function
}

interface ViewLayout {
    Type: ViewType; //"Grid" | "Cards"
    ViewBlocks: ViewBlock[]; //refer to the list api design 
}

// represent one row (i.e. one item)
// the matching between block and property is done by the "key" 
interface RowData {
    [key: string]: any;
}

interface Search {
    Visible: boolean
}

export interface ListSmartSearch{
    Fields: ListSmartSearchField[];
}

export interface ListSmartSearchField{
    FieldID: string;
    Title: string;
    Type: SchemeFieldType
}

type ViewType = "Grid" | "Cards";

export interface ListState {
    ListKey: string;
    ViewKey?: string; // default use the first
    SearchString?: string; // default no search 
    // SmartSearchQuery?: JSONRegularFilter[]; //default no search
    Sorting?: Sorting; // default CreationDateTime, Ascending = false
    PageSize?: number //default = 100
    PageIndex?: number; // default = 1 (first page)
    ItemSelection?: ItemSelection; // default Items is empty array and SelectAll is false 
}

interface ItemSelection {
    SelectAll: Boolean // default false 
    Items: string[]
}

interface Sorting{
    FieldID: string;
    Ascending: boolean;
}

interface ViewBlock{
    Title: string;
    Configuration: any;
    AddonUUID: string,
    DrawURL: string
}