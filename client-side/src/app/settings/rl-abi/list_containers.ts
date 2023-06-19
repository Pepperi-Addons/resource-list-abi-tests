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

    itemsBasicView: any = {
        List: {
            Key: "itemsBasicView",
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
            ListKey: "itemsBasicView",
        }
    }

    accountsBasicView: any = {
        List: {
            Key: "accountsBasicView",
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
            SelectionType: "Multi", // "Multi" / "None" / "Single"
        },
        State: {
            ListKey: "accountsBasicView",
        }
    }

    accountsTestDrawGrid: any = {
        List: {
            Key: "accountsTestDrawGrid",
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
            ListKey: "accountsTestDrawGrid",
        }
    }

    accountsMenu: any = {
        List: {
            Key: "accountsMenu",
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
            ListKey: "accountsMenu",
        }
    }

    accountsMenuHostingAddonFunc: any = {
        List: {
            Key: "accountsMenuHostingAddonFunc",
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
            ListKey: "accountsMenuHostingAddonFunc",
        }
    }

    accountsMenuFull: any = {
        List: {
            Key: "accountsMenuFull",
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
            ListKey: "accountsMenuFull",
        }
    }

    accountsLineMenu: any = {
        List: {
            Key: "accountsLineMenu",
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
            ListKey: "accountsLineMenu",
        }
    }

    itemsLineMenuSelectionTypeMulti: any = {
        List: {
            Key: "itemsLineMenuSelectionTypeMulti",
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
            ListKey: "itemsLineMenuSelectionTypeMulti",
        }
    }

    itemsSearch: any = {
        List: {
            Key: "itemsSearch",
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
            ListKey: "itemsSearch",
        }
    }

    accountsSmartSearch: any = {
        List: {
            Key: "accountsSmartSearch",
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
            ListKey: "accountsSmartSearch",
        }
    }

    accountsSelectionTypeMulti: any = {
        List: {
            Key: "accountsSelectionTypeMulti",
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
            ListKey: "accountsSelectionTypeMulti",
        }
    }

    accountsSelectionTypeSingle: any = {
        List: {
            Key: "accountsSelectionTypeSingle",
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
            ListKey: "accountsSelectionTypeSingle",
        }
    }

    accountsSelectionTypeNone: any = {
        List: {
            Key: "accountsSelectionTypeNone",
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
            ListKey: "accountsSelectionTypeNone",
        }
    }

    accountsSortingAscending: any = {
        List: {
            Key: "accountsSortingAscending",
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
            ListKey: "accountsSortingAscending",
        }
    }

    accountsSortingDescending: any = {
        List: {
            Key: "accountsSortingDescending",
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
            ListKey: "accountsSortingDescending",
        }
    }

    accountsBasicWithDefaultDraw: any = {
        List: {
            Key: "accountsBasicWithDefaultDraw",
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
            ListKey: "accountsBasicWithDefaultDraw",
        }
    }

    itemsPageTypePages: any = {
        List: {
            Key: "itemsPageTypePages",
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
            ListKey: "itemsPageTypePages",
            PageType: "Pages", // "Pages" / "Scroll"
        }
    }

    itemsPageTypePages_PageSize: any = {
        List: {
            Key: "itemsPageTypePagesPageSize",
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
            ListKey: "itemsPageTypePagesPageSize",
            PageType: "Pages", // "Pages" / "Scroll"
            PageSize: 7,
        }
    }

    itemsPageTypePages_PageIndex: any = {
        List: {
            Key: "itemsPageTypePagesPageIndex",
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
            ListKey: "itemsPageTypePagesPageIndex",
            PageType: "Pages", // "Pages" / "Scroll"
            PageIndex: 2,
        }
    }

    itemsPageTypePages_PageSizePageIndex: any = {
        List: {
            Key: "itemsPageTypePagesPageSizePageIndex",
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
            ListKey: "itemsPageTypePagesPageSizePageIndex",
            PageType: "Pages", // "Pages" / "Scroll"
            PageSize: 7,
            PageIndex: 2,
        }
    }

    itemsPageTypeScroll: any = {
        List: {
            Key: "itemsPageTypeScroll",
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
            ListKey: "itemsPageTypeScroll",
            PageType: "Scroll", // "Pages" / "Scroll"
        }
    }

    itemsPageTypeScroll_PageIndex: any = {
        List: {
            Key: "itemsPageTypeScrollPageIndex",
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
            ListKey: "itemsPageTypeScrollPageIndex",
            PageType: "Scroll", // "Pages" / "Scroll"
            PageIndex: 2,
        }
    }

    itemsPageTypeScroll_PageSizePageIndex: any = {
        List: {
            Key: "itemsPageTypeScrollPageSizePageIndex",
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
            ListKey: "itemsPageTypeScrollPageSizePageIndex",
            PageType: "Scroll", // "Pages" / "Scroll"
            PageSize: 7,
            PageIndex: 2,
        }
    }

    accountsFull: any = {
        List: {
            Key: "accountsFull",
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
            ListKey: "accountsFull",
            Sorting: { Ascending: false, FieldID: "Name" },
            PageSize: 7,
            PageIndex: 1,
            PageType: "Pages", // "Pages" / "Scroll"
            //   SearchString: "a"
        }
    }

    filtersAccRef2Views: any = {
        List: {
            Key: "LIST_KEY",
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
            ListKey: "LIST_KEY",
            PageSize: 7,
            PageIndex: 2,
            PageType: "Scroll", // "Pages" / "Scroll"
            //   SearchString: "a"
        }
    }

    referenceAccount2Views: any = {
        List: {
            Key: "referenceAccount2Views",
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
            ListKey: "referenceAccount2Views",
            // Sorting: { Ascending: false, FieldID: "item" },
            PageSize: 7, // Default: 25
            PageIndex: 2, // Default: 1
            PageType: "Scroll", // Default: "Pages" / "Scroll"
            // SearchString: "a"
        }
    }
}