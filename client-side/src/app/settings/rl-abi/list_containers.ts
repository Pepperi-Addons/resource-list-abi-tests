export class ListContainers {
    // shape: any = {
    //     List: {
    //         Key: "LIST_KEY",
    //         Name: "List Name",
    //         Resource: "Resource",
    //         Views: [
    //             {
    //                 Key: "account additional fields",
    //                 Type: "Grid", // "Cards"
    //                 Title: "Additional Indexed Fields",
    //                 Blocks: [
    //                     {
    //                         Title: "Account Key",
    //                         Configuration: {
    //                             Type: "TextBox",
    //                             FieldID: "from_account",
    //                             Width: 15
    //                         },
    //                         // DrawURL: 'addon-cpi/drawGrid',
    //                         // AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
    //                     },
    //                 ],
    //             },
    //         ],
    //         Menu: {
    //             Blocks: [
    //                 {
    //                     Key: 'recycleBin',
    //                     Title: 'Recycle Bin',
    //                     DrawURL: 'addon-cpi/drawRecycleBinMenuBlock',
    //                     AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
    //                     ExecuteURL: 'addon-cpi/menuExecution'
    //                 },
    //             ]
    //         },
    //         LineMenu: {
    //             Blocks: [
    //                 {
    //                     Key: "delete",
    //                     Title: "Delete",
    //                     DrawURL: 'addon-cpi/drawDeleteLineMenuBlock',
    //                     AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
    //                     ExecuteURL: 'addon-cpi/menuExecution'
    //                 },
    //             ]
    //         },
    //         Search: {
    //             Fields: [
    //                 {
    //                     FieldID: "from_account.Name"
    //                 },
    //             ]
    //         },
    //         SmartSearch: {
    //             Fields: [
    //                 {
    //                     FieldID: "item",
    //                     Title: "Item",
    //                     Type: "String"
    //                 },
    //             ]
    //         },
    //         SelectionType: "Multi", // Default: "Single" / "Multi" / "None" 
    //         // Sorting: { Ascending: true, FieldID: "item" }
    //     },
    //     State: {
    //         ListKey: "LIST_KEY",
    //         Sorting: { Ascending: false, FieldID: "item" },
    //         PageSize: 7, // Default: 25
    //         PageIndex: 2, // Default: 1
    //         PageType: "Scroll", // Default: "Pages" / "Scroll"
    //         SearchString: "a"
    //     }
    // }

    // nameAgeExistingView: any = {
    //     State: {
    //         ListKey: "30ff749d-0ed1-4278-b08a-88be21ecdcb1",
    //     }
    // }

    items_BasicView: any = {
        List: {
            Key: "items_BasicView",
            Name: "Items Basic",
            Resource: "items",
            Views: [
                {
                    Key: "Items",
                    Type: "Grid",
                    Title: "Items",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 7
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Price",
                                Width: 2
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "UPC",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "LongDescription",
                                Width: 15
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
        },
        State: {
            ListKey: "items_BasicView",
        }
    }

    accounts_BasicView: any = {
        List: {
            Key: "accounts_BasicView",
            Name: "Accounts Basic",
            Resource: "accounts",
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Key",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Key",
                                Width: 15
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 6
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Email",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Country",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "City",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Type",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
            Menu: {
                Blocks: []
            },
            LineMenu: {
                Blocks: []
            },
            Search: {
                Fields: []
            },
            SmartSearch: {
                Fields: []
            },
        },
        State: {
            ListKey: "accounts_BasicView",
        }
    }

    accounts_TestDrawGrid: any = {
        List: {
            Key: "accounts_TestDrawGrid",
            Name: "Accounts Test Draw Grid",
            Resource: "accounts",
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts Test Draw",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 7
                            },
                            DrawURL: 'addon-cpi/testDrawGrid',
                            AddonUUID: 'cd3ba412-66a4-42f4-8abc-65768c5dc606'
                        },
                        {
                            Title: "Email",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Email",
                                Width: 15
                            },
                            DrawURL: 'addon-cpi/testDrawGrid',
                            AddonUUID: 'cd3ba412-66a4-42f4-8abc-65768c5dc606'
                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Country",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/testDrawGrid',
                            AddonUUID: 'cd3ba412-66a4-42f4-8abc-65768c5dc606'
                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "City",
                                Width: 2
                            },
                            DrawURL: 'addon-cpi/testDrawGrid',
                            AddonUUID: 'cd3ba412-66a4-42f4-8abc-65768c5dc606'
                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Type",
                                Width: 2
                            },
                            DrawURL: 'addon-cpi/testDrawGrid',
                            AddonUUID: 'cd3ba412-66a4-42f4-8abc-65768c5dc606'
                        },
                    ],
                },
            ],
            Menu: {
                Blocks: []
            },
            LineMenu: {
                Blocks: []
            },
            SelectionType: "Multi", // "Multi" / "None" / "Single"
        },
        State: {
            ListKey: "accounts_TestDrawGrid",
        }
    }

    accounts_Menu: any = {
        List: {
            Key: "accounts_Menu",
            Name: "Accounts With Menu",
            Resource: "accounts",
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 6
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Email",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Country",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "City",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Type",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
            Menu: {
                Blocks: [
                    {
                        Key: 'recycleBin',
                        Title: 'Recycle Bin',
                        DrawURL: 'addon-cpi/drawRecycleBinMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ExecuteURL: 'addon-cpi/menuExecution'
                    },
                    {
                        Key: 'import',
                        Title: 'Import',
                        DrawURL: 'addon-cpi/drawImportMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ExecuteURL: 'addon-cpi/menuExecution'
                    },
                    {
                        Key: 'export',
                        Title: 'Export',
                        DrawURL: 'addon-cpi/drawExportMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ExecuteURL: 'addon-cpi/menuExecution'
                    },
                    {
                        Key: 'new',
                        Title: 'New',
                        DrawURL: 'addon-cpi/drawNewButtonMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ButtonStyleType: "Strong",
                        ExecuteURL: 'addon-cpi/menuExecution'
                    },
                ]
            },
        },
        State: {
            ListKey: "accounts_Menu",
        }
    }

    accounts_MenuHostingAddonFunc: any = {
        List: {
            Key: "accounts_MenuHostingAddonFunc",
            Name: "Accounts Menu With Hosting Addon functionality",
            Resource: "accounts",
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 6
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Email",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Country",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "City",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Type",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
            Menu: {
                Blocks: [
                    {
                        Key: 'test',
                        Title: 'Test',
                        DrawURL: 'addon-cpi/drawTest',
                        AddonUUID: 'cd3ba412-66a4-42f4-8abc-65768c5dc606',
                        ExecuteURL: 'addon-cpi/menuExecutionTest'
                    },
                    {
                        Key: 'navigateHome',
                        Title: 'Go To Home Page',
                        DrawURL: 'addon-cpi/drawNavigateHome',
                        AddonUUID: 'cd3ba412-66a4-42f4-8abc-65768c5dc606',
                        ExecuteURL: 'addon-cpi/menuExecutionGoHome'
                    },
                ]
            },
        },
        State: {
            ListKey: "accounts_MenuHostingAddonFunc",
        }
    }

    accounts_MenuFull: any = {
        List: {
            Key: "accounts_MenuFull",
            Name: "Accounts With Menu Full",
            Resource: "accounts",
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 6
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Email",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Country",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "City",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Type",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
            Menu: {
                Blocks: [
                    {
                        Key: 'recycleBin',
                        Title: 'Recycle Bin',
                        DrawURL: 'addon-cpi/drawRecycleBinMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ExecuteURL: 'addon-cpi/menuExecution'
                    },
                    {
                        Key: 'import',
                        Title: 'Import',
                        DrawURL: 'addon-cpi/drawImportMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ExecuteURL: 'addon-cpi/menuExecution'
                    },
                    {
                        Key: 'export',
                        Title: 'Export',
                        DrawURL: 'addon-cpi/drawExportMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ExecuteURL: 'addon-cpi/menuExecution'
                    },
                    {
                        Key: 'test',
                        Title: 'Test',
                        DrawURL: 'addon-cpi/drawTest',
                        AddonUUID: 'cd3ba412-66a4-42f4-8abc-65768c5dc606',
                        ExecuteURL: 'addon-cpi/menuExecutionTest'
                    },
                    {
                        Key: 'navigateHome',
                        Title: 'Go To Home Page',
                        DrawURL: 'addon-cpi/drawNavigateHome',
                        AddonUUID: 'cd3ba412-66a4-42f4-8abc-65768c5dc606',
                        ExecuteURL: 'addon-cpi/menuExecutionGoHome'
                    },
                    {
                        Key: 'new',
                        Title: 'New',
                        DrawURL: 'addon-cpi/drawNewButtonMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ButtonStyleType: "Strong",
                        ExecuteURL: 'addon-cpi/menuExecution'
                    },
                ]
            },
        },
        State: {
            ListKey: "accounts_MenuFull",
        }
    }

    accounts_LineMenu: any = {
        List: {
            Key: "accounts_LineMenu",
            Name: "Accounts With Line Menu",
            Resource: "accounts",
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 6
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Email",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Country",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "City",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Type",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
            LineMenu: {
                Blocks: [
                    {
                        Key: "delete",
                        Title: "Delete",
                        DrawURL: 'addon-cpi/drawDeleteLineMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ExecuteURL: 'addon-cpi/menuExecution'
                    },
                    {
                        Key: "edit",
                        Title: "Edit",
                        DrawURL: 'addon-cpi/drawEditLineMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ExecuteURL: 'addon-cpi/menuExecution'
                    }
                ]
            },
        },
        State: {
            ListKey: "accounts_LineMenu",
        }
    }

    items_LineMenuSelectionTypeMulti: any = {
        List: {
            Key: "items_LineMenuSelectionTypeMulti",
            Name: "Items with Line Menu (Selection Type 'Multi')",
            Resource: "items",
            Views: [
                {
                    Key: "Items Line Menu Selection Multi",
                    Type: "Grid",
                    Title: "Items Line Menu Selection Multi",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 7
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Price",
                                Width: 2
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "UPC",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "LongDescription",
                                Width: 15
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
            LineMenu: {
                Blocks: [
                    {
                        Key: "delete",
                        Title: "Delete",
                        DrawURL: 'addon-cpi/drawDeleteLineMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ExecuteURL: 'addon-cpi/menuExecution'
                    },
                    {
                        Key: "edit",
                        Title: "Edit",
                        DrawURL: 'addon-cpi/drawEditLineMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ExecuteURL: 'addon-cpi/menuExecution'
                    }
                ]
            },
            SelectionType: "Multi", // "Multi" / "None" / "Single"
        },
        State: {
            ListKey: "items_LineMenuSelectionTypeMulti",
        }
    }

    items_Search: any = {
        List: {
            Key: "items_Search",
            Name: "Items With Search (Name, Category, Description)",
            Resource: "items",
            Views: [
                {
                    Key: "Items",
                    Type: "Grid",
                    Title: "Items",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 7
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Price",
                                Width: 2
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "UPC",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "LongDescription",
                                Width: 15
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
            Search: {
                Fields: [
                    {
                        FieldID: "Name"
                    },
                    {
                        FieldID: "MainCategory"
                    },
                    {
                        FieldID: "LongDescription"
                    },
                ]
            },
        },
        State: {
            ListKey: "items_Search",
        }
    }

    accounts_SmartSearch: any = {
        List: {
            Key: "accounts_SmartSearch",
            Name: "Accounts With Smart Search (Name)",
            Resource: "accounts",
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 6
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Email",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Country",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "City",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Type",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
            SmartSearch: {
                Fields: [
                    {
                        FieldID: "Name",
                        Title: "Name",
                        Type: "String"
                    },
                ]
            },
        },
        State: {
            ListKey: "accounts_SmartSearch",
        }
    }

    accounts_SelectionTypeMulti: any = {
        List: {
            Key: "accounts_SelectionTypeMulti",
            Name: "Accounts Selection Type Multi",
            Resource: "accounts",
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 6
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Email",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Country",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "City",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Type",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
            SelectionType: "Multi", // "Multi" / "None" / "Single"
        },
        State: {
            ListKey: "accounts_SelectionTypeMulti",
        }
    }

    accounts_SelectionTypeSingle: any = {
        List: {
            Key: "accounts_SelectionTypeSingle",
            Name: "Accounts Selection Type Single",
            Resource: "accounts",
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 6
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Email",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Country",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "City",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Type",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
            SelectionType: "Single", // "Multi" / "None" / "Single"
        },
        State: {
            ListKey: "accounts_SelectionTypeSingle",
        }
    }

    accounts_SelectionTypeNone: any = {
        List: {
            Key: "accounts_SelectionTypeNone",
            Name: "Accounts Selection Type None",
            Resource: "accounts",
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 6
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Email",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Country",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "City",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Type",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
            SelectionType: "None", // "Multi" / "None" / "Single"
        },
        State: {
            ListKey: "accounts_SelectionTypeNone",
        }
    }

    accounts_SortingAscending: any = {
        List: {
            Key: "accounts_SortingAscending",
            Name: "Accounts Sorting by Name Acsending",
            Resource: "accounts",
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 6
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Email",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Country",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "City",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Type",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
            Sorting: { Ascending: true, FieldID: "Name" }
        },
        State: {
            ListKey: "accounts_SortingAscending",
        }
    }

    accounts_SortingDescending: any = {
        List: {
            Key: "accounts_SortingDescending",
            Name: "Accounts Sorting by Name Decsending",
            Resource: "accounts",
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 6
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Email",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Country",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "City",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Type",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
            Sorting: { Ascending: false, FieldID: "Name" }
        },
        State: {
            ListKey: "accounts_SortingDescending",
        }
    }

    accounts_BasicWithDefaultDraw: any = {
        List: {
            Key: "accounts_BasicWithDefaultDraw",
            Name: "Accounts With Default Draw",
            Resource: "accounts",
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Key",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Key",
                                Width: 15
                            },
                        },
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 6
                            },
                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Email",
                                Width: 10
                            },
                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Country",
                                Width: 5
                            },
                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "City",
                                Width: 5
                            },
                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Type",
                                Width: 5
                            },
                        },
                    ],
                },
            ],
        },
        State: {
            ListKey: "accounts_BasicWithDefaultDraw",
        }
    }

    items_PageTypePages: any = {
        List: {
            Key: "items_PageTypePages",
            Name: "Items Page Type 'Pages'",
            Resource: "items",
            Views: [
                {
                    Key: "Items Page Type 'Pages'",
                    Type: "Grid",
                    Title: "Items Page Type 'Pages'",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 7
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Price",
                                Width: 2
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "UPC",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "LongDescription",
                                Width: 15
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
        },
        State: {
            ListKey: "items_PageTypePages",
            PageType: "Pages", // "Pages" / "Scroll"
        }
    }

    items_PageTypePages_PageSize: any = {
        List: {
            Key: "items_PageTypePages_PageSize",
            Name: "Items Page Type 'Pages' with Page Size",
            Resource: "items",
            Views: [
                {
                    Key: "Items Pages Page Size",
                    Type: "Grid",
                    Title: "Items Pages Page Size",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 7
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Price",
                                Width: 2
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "UPC",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "LongDescription",
                                Width: 15
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
        },
        State: {
            ListKey: "items_PageTypePages_PageSize",
            PageType: "Pages", // "Pages" / "Scroll"
            PageSize: 7,
        }
    }

    items_PageTypePages_PageIndex: any = {
        List: {
            Key: "items_PageTypePages_PageIndex",
            Name: "Items Page Type 'Pages' with Page Index",
            Resource: "items",
            Views: [
                {
                    Key: "Items Pages Page Index",
                    Type: "Grid",
                    Title: "Items Pages Page Index",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 7
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Price",
                                Width: 2
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "UPC",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "LongDescription",
                                Width: 15
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
        },
        State: {
            ListKey: "items_PageTypePages_PageIndex",
            PageType: "Pages", // "Pages" / "Scroll"
            PageIndex: 2,
        }
    }

    items_PageTypePages_TopScrollIndex: any = {
        List: {
            Key: "items_PageTypePages_TopScrollIndex",
            Name: "Items Page Type 'Pages' with Top Scroll Index",
            Resource: "items",
            Views: [
                {
                    Key: "Items Pages Top Scroll Index",
                    Type: "Grid",
                    Title: "Items Pages Top Scroll Index",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 7
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Price",
                                Width: 2
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "UPC",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "LongDescription",
                                Width: 15
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
        },
        State: {
            ListKey: "items_PageTypePages_TopScrollIndex",
            PageType: "Pages", // "Pages" / "Scroll"
            TopScrollIndex: 10,
        }
    }

    items_PageTypePages_PageSizePageIndex: any = {
        List: {
            Key: "items_PageTypePages_PageSizePageIndex",
            Name: "Items Page Type 'Pages' with Page Size & Page Index",
            Resource: "items",
            Views: [
                {
                    Key: "Items Pages Page Size & Page Index",
                    Type: "Grid",
                    Title: "Items Pages Page Size & Page Index",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 7
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Price",
                                Width: 2
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "UPC",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "LongDescription",
                                Width: 15
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
        },
        State: {
            ListKey: "items_PageTypePages_PageSizePageIndex",
            PageType: "Pages", // "Pages" / "Scroll"
            PageSize: 7,
            PageIndex: 2,
        }
    }

    items_PageTypePages_PageSizePageIndexTopScrollIndex: any = {
        List: {
            Key: "items_PageTypePages_PageSizePageIndexTopScrollIndex",
            Name: "Items Page Type 'Pages' with Page Size, Page Index and Top Scroll Index",
            Resource: "items",
            Views: [
                {
                    Key: "Items Pages Page Size Page Index Top Scroll Index",
                    Type: "Grid",
                    Title: "Items Pages Page Size, Page Index, Top Scroll Index",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 7
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Price",
                                Width: 2
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "UPC",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "LongDescription",
                                Width: 15
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
        },
        State: {
            ListKey: "items_PageTypePages_PageSizePageIndexTopScrollIndex",
            PageType: "Pages", // "Pages" / "Scroll"
            PageSize: 10,
            PageIndex: 2,
            TopScrollIndex: 5,
        }
    }

    items_PageTypeScroll: any = {
        List: {
            Key: "items_PageTypeScroll",
            Name: "Items Page Type 'Scroll'",
            Resource: "items",
            Views: [
                {
                    Key: "Items Page Type 'Scroll'",
                    Type: "Grid",
                    Title: "Items Page Type 'Scroll'",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 7
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Price",
                                Width: 2
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "UPC",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "LongDescription",
                                Width: 15
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
        },
        State: {
            ListKey: "items_PageTypeScroll",
            PageType: "Scroll", // "Pages" / "Scroll"
        }
    }

    items_PageTypeScroll_TopScrollIndex: any = {
        List: {
            Key: "items_PageTypeScroll_TopScrollIndex",
            Name: "Items: Page Type 'Scroll' with Top Scroll Index",
            Resource: "items",
            Views: [
                {
                    Key: "Items Scroll Top Scroll Index",
                    Type: "Grid",
                    Title: "Items Scroll Top Scroll Index",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 7
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Price",
                                Width: 2
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "UPC",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "LongDescription",
                                Width: 15
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
        },
        State: {
            ListKey: "items_PageTypeScroll_TopScrollIndex",
            PageType: "Scroll", // "Pages" / "Scroll"
            TopScrollIndex: 3,
        }
    }

    items_PageTypeScroll_PageIndex: any = {
        List: {
            Key: "items_PageTypeScroll_PageIndex",
            Name: "Items Page Type 'Scroll' with Page Index",
            Resource: "items",
            Views: [
                {
                    Key: "Items Scroll Page Index",
                    Type: "Grid",
                    Title: "Items Scroll Page Index",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 7
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Price",
                                Width: 2
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "UPC",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "LongDescription",
                                Width: 15
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
        },
        State: {
            ListKey: "items_PageTypeScroll_PageIndex",
            PageType: "Scroll", // "Pages" / "Scroll"
            PageIndex: 2,
        }
    }

    items_PageTypeScroll_PageIndexTopScrollIndex: any = {
        List: {
            Key: "items_PageTypeScroll_PageIndexTopScrollIndex",
            Name: "Items Page Type 'Scroll' with Page Index & Top Scroll Index",
            Resource: "items",
            Views: [
                {
                    Key: "Items Scroll Page Index & Top Scroll Index",
                    Type: "Grid",
                    Title: "Items Scroll Page Index & Top Scroll Index",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 7
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Price",
                                Width: 2
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "UPC",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "LongDescription",
                                Width: 15
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
        },
        State: {
            ListKey: "items_PageTypeScroll_PageIndexTopScrollIndex",
            PageType: "Scroll", // "Pages" / "Scroll"
            PageIndex: 2,
            TopScrollIndex: 10,
        }
    }

    items_PageTypeScroll_PageSizePageIndex: any = {
        List: {
            Key: "items_PageTypeScroll_PageSizePageIndex",
            Name: "Items Page Type 'Scroll' with Page Size & Page Index",
            Resource: "items",
            Views: [
                {
                    Key: "Items Scroll Page Size Page Index",
                    Type: "Grid",
                    Title: "Items Scroll Page Size Page Index",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 7
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Price",
                                Width: 2
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "UPC",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "LongDescription",
                                Width: 15
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
        },
        State: {
            ListKey: "items_PageTypeScroll_PageSizePageIndex",
            PageType: "Scroll", // "Pages" / "Scroll"
            PageSize: 7,
            PageIndex: 2,
        }
    }

    items_PageTypeScroll_PageSizePageIndexTopScrollIndex: any = {
        List: {
            Key: "items_PageTypeScroll_PageSizePageIndexTopScrollIndex",
            Name: "Items Page Type 'Scroll' with Page Size & Page Index & Top Scroll Index",
            Resource: "items",
            Views: [
                {
                    Key: "Items Scroll Page Size Page Index Top Scroll Index",
                    Type: "Grid",
                    Title: "Items Scroll Page Size Page Index Top Scroll Index",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 7
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Price",
                                Width: 2
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "UPC",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "LongDescription",
                                Width: 15
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
        },
        State: {
            ListKey: "items_PageTypeScroll_PageSizePageIndexTopScrollIndex",
            PageType: "Scroll", // "Pages" / "Scroll"
            PageSize: 10,
            PageIndex: 2,
            TopScrollIndex: 6,
        }
    }

    accounts_Full: any = {
        List: {
            Key: "accounts_Full",
            Name: "Accounts Full",
            Resource: "accounts",
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Key",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Key",
                                Width: 15
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Name",
                                Width: 6
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Email",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Country",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "City",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "Type",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
            Menu: {
                Blocks: [
                    {
                        Key: 'recycleBin',
                        Title: 'Recycle Bin',
                        DrawURL: 'addon-cpi/drawRecycleBinMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ExecuteURL: 'addon-cpi/menuExecution'
                    },
                    {
                        Key: 'import',
                        Title: 'Import',
                        DrawURL: 'addon-cpi/drawImportMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ExecuteURL: 'addon-cpi/menuExecution'
                    },
                    {
                        Key: 'export',
                        Title: 'Export',
                        DrawURL: 'addon-cpi/drawExportMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ExecuteURL: 'addon-cpi/menuExecution'
                    },
                    {
                        Key: 'test',
                        Title: 'Test',
                        DrawURL: 'addon-cpi/drawTest',
                        AddonUUID: 'cd3ba412-66a4-42f4-8abc-65768c5dc606',
                        ExecuteURL: 'addon-cpi/menuExecutionTest'
                    },
                    {
                        Key: 'navigateHome',
                        Title: 'Go To Home Page',
                        DrawURL: 'addon-cpi/drawNavigateHome',
                        AddonUUID: 'cd3ba412-66a4-42f4-8abc-65768c5dc606',
                        ExecuteURL: 'addon-cpi/menuExecutionGoHome'
                    },
                    {
                        Key: 'new',
                        Title: 'New',
                        DrawURL: 'addon-cpi/drawNewButtonMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ButtonStyleType: "Strong",
                        ExecuteURL: 'addon-cpi/menuExecution'
                    },
                ]
            },
            LineMenu: {
                Blocks: [
                    {
                        Key: "delete",
                        Title: "Delete",
                        DrawURL: 'addon-cpi/drawDeleteLineMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ExecuteURL: 'addon-cpi/menuExecution'
                    },
                    {
                        Key: "edit",
                        Title: "Edit",
                        DrawURL: 'addon-cpi/drawEditLineMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ExecuteURL: 'addon-cpi/menuExecution'
                    }
                ]
            },
            Search: {
                Fields: [
                    {
                        FieldID: "Name"
                    },
                ]
            },
            SmartSearch: {
                Fields: [
                    {
                        FieldID: "Name",
                        Title: "Name",
                        Type: "String"
                    },
                ]
            },
            SelectionType: "Multi", // "Multi" / "None" / "Single"
            // Sorting: { Ascending: true, FieldID: "item" }
        },
        State: {
            ListKey: "accounts_Full",
            Sorting: { Ascending: false, FieldID: "Name" },
            PageSize: 7,
            PageIndex: 1,
            PageType: "Pages", // "Pages" / "Scroll"
            //   SearchString: "a"
        }
    }

    filtersAccRef_2Views: any = {
        List: {
            Key: "filtersAccRef_2Views",
            Name: "Filters Acc Ref ABI View",
            Resource: "FiltersAccRefAuto",
            Views: [
                {
                    Key: "account additional fields",
                    Type: "Grid",
                    Title: "Additional Indexed Fields",
                    Blocks: [
                        {
                            Title: "Account Key",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "from_account",
                                Width: 12
                            },
                        },
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "from_account.Name",
                                Width: 6
                            },
                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "from_account.Email",
                                Width: 10
                            },
                        },
                        {
                            Title: "Item",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "item",
                                Width: 5
                            },
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "price",
                                Width: 5
                            },
                        },
                        {
                            Title: "Quantity",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "quantity",
                                Width: 6
                            },
                        },
                        {
                            Title: "In Stock",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "instock",
                                Width: 2
                            },
                        },
                    ],
                },
                {
                    Key: "no additional to account",
                    Type: "Grid",
                    Title: "No Additional",
                    Blocks: [
                        {
                            Title: "Account Key",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "from_account",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Item",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "item",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "price",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Quantity",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "quantity",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "In Stock",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "instock",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                }
            ],
            Menu: {
                Blocks: [
                    {
                        Key: 'recycleBin',
                        Title: 'Recycle Bin',
                        DrawURL: 'addon-cpi/drawRecycleBinMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ExecuteURL: 'addon-cpi/menuExecution'
                    },
                    {
                        Key: 'import',
                        Title: 'Import',
                        DrawURL: 'addon-cpi/drawImportMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ExecuteURL: 'addon-cpi/menuExecution'
                    },
                    {
                        Key: 'export',
                        Title: 'Export',
                        DrawURL: 'addon-cpi/drawExportMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ExecuteURL: 'addon-cpi/menuExecution'
                    },
                    {
                        Key: 'test',
                        Title: 'Test',
                        DrawURL: 'addon-cpi/drawTest',
                        AddonUUID: 'cd3ba412-66a4-42f4-8abc-65768c5dc606',
                        ExecuteURL: 'addon-cpi/menuExecutionTest'
                    },
                    {
                        Key: 'navigateHome',
                        Title: 'Go To Home Page',
                        DrawURL: 'addon-cpi/drawNavigateHome',
                        AddonUUID: 'cd3ba412-66a4-42f4-8abc-65768c5dc606',
                        ExecuteURL: 'addon-cpi/menuExecutionGoHome'
                    },
                    {
                        Key: 'new',
                        Title: 'New',
                        DrawURL: 'addon-cpi/drawNewButtonMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ButtonStyleType: "Strong",
                        ExecuteURL: 'addon-cpi/menuExecution'
                    },
                ]
            },
            LineMenu: {
                Blocks: [
                    {
                        Key: "delete",
                        Title: "Delete",
                        DrawURL: 'addon-cpi/drawDeleteLineMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ExecuteURL: 'addon-cpi/menuExecution'
                    },
                    {
                        Key: "edit",
                        Title: "Edit",
                        DrawURL: 'addon-cpi/drawEditLineMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ExecuteURL: 'addon-cpi/menuExecution'
                    }
                ]
            },
            Search: {
                Fields: [
                    {
                        FieldID: "from_account.Name"
                    },
                    {
                        FieldID: "item"
                    },
                ]
            },
            SmartSearch: {
                Fields: [
                    {
                        FieldID: "item",
                        Title: "Item",
                        Type: "String"
                    },
                    {
                        FieldID: "price",
                        Title: "Price",
                        Type: "Double"
                    },
                    {
                        FieldID: "quantity",
                        Title: "Quantity",
                        Type: "Integer"
                    },
                    {
                        FieldID: "instock",
                        Title: "In Stock",
                        Type: "Bool"
                    },
                ]
            },
            SelectionType: "Multi", // "Multi" / "None" / "Single"
            Sorting: { Ascending: true, FieldID: "from_account" }
        },
        State: {
            ListKey: "filtersAccRef_2Views",
            PageSize: 7,
            PageIndex: 2,
            PageType: "Pages", // "Pages" / "Scroll"
        }
    }

    referenceAccount_2Views: any = {
        List: {
            Key: "referenceAccount_2Views",
            Name: "Reference Account",
            Resource: "ReferenceAccountAuto",
            Views: [
                {
                    Key: "reference accout best seller",
                    Type: "Grid", // "Cards"
                    Title: "Best Seller",
                    Blocks: [
                        {
                            Title: "Account Key",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "of_account",
                                Width: 15
                            },
                            // DrawURL: 'addon-cpi/drawGrid',
                            // AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Best Seller Item",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "best_seller_item",
                                Width: 15
                            },
                        },
                    ],
                },
                {
                    Key: "reference accout max quantity",
                    Type: "Grid", // "Cards"
                    Title: "Max Quantity",
                    Blocks: [
                        {
                            Title: "Account Key",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "of_account",
                                Width: 15
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Max Quantity",
                            Configuration: {
                                Type: "TextBox",
                                FieldID: "max_quantity",
                                Width: 15
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                    ],
                },
            ],
            Menu: {
                Blocks: [
                    {
                        Key: 'recycleBin',
                        Title: 'Recycle Bin',
                        DrawURL: 'addon-cpi/drawRecycleBinMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ExecuteURL: 'addon-cpi/menuExecution'
                    },
                ]
            },
            LineMenu: {
                Blocks: [
                    {
                        Key: "delete",
                        Title: "Delete",
                        DrawURL: 'addon-cpi/drawDeleteLineMenuBlock',
                        AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3',
                        ExecuteURL: 'addon-cpi/menuExecution'
                    },
                ]
            },
            Search: {
                Fields: [
                    {
                        FieldID: "max_quantity"
                    },
                ]
            },
            SmartSearch: {
                Fields: [
                    {
                        FieldID: "of_account.Name",
                        Title: "Account Name",
                        Type: "String"
                    },
                    {
                        FieldID: "of_account",
                        Title: "Account Key",
                        Type: "String"
                    },
                ]
            },
            SelectionType: "Multi", // Default: "Single" / "Multi" / "None" 
            // Sorting: { Ascending: true, FieldID: "item" }
        },
        State: {
            ListKey: "referenceAccount_2Views",
            // Sorting: { Ascending: false, FieldID: "item" },
            PageSize: 7, // Default: 25
            PageIndex: 2, // Default: 1
            PageType: "Scroll", // Default: "Pages" / "Scroll"
            // SearchString: "a"
        }
    }
}