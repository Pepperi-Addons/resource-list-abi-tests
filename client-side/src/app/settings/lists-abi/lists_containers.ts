export class ListsContainers {
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
    //                             Type: "String",
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

    items_BasicView: any = { // 1.
        List: {
            Key: "items_BasicView",
            Name: "Items Basic",
            Resource: { Name: "items", AddonUUID: "" },
            Views: [
                {
                    Key: "Items",
                    Type: "Grid",
                    Title: "Items",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 7
                            },

                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "String",
                                FieldID: "ExternalID",
                                Width: 4
                            },

                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "String",
                                FieldID: "MainCategory",
                                Width: 4
                            },

                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "Price",
                                Width: 2
                            },

                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "CostPrice",
                                Width: 3
                            },

                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "String",
                                FieldID: "UPC",
                                Width: 3
                            },

                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "String",
                                FieldID: "LongDescription",
                                Width: 15
                            },

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
            ListKey: "items_BasicView",
        }
    }

    accounts_BasicView: any = { // 2.
        List: {
            Key: "accounts_BasicView",
            Name: "Accounts Basic",
            Resource: { Name: "accounts", AddonUUID: "" },
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Key",
                            Configuration: {
                                Type: "String",
                                FieldID: "Key",
                                Width: 15
                            },

                        },
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 6
                            },

                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "String",
                                FieldID: "Email",
                                Width: 10
                            },

                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "String",
                                FieldID: "Country",
                                Width: 5
                            },

                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "String",
                                FieldID: "City",
                                Width: 5
                            },

                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "String",
                                FieldID: "Type",
                                Width: 5
                            },

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

    accounts_BasicWithDefaultDraw: any = { // 3.
        List: {
            Key: "accounts_BasicWithDefaultDraw",
            Name: "Accounts With Default Draw",
            Resource: { Name: "accounts", AddonUUID: "" },
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Key",
                            Configuration: {
                                Type: "String",
                                FieldID: "Key",
                                Width: 15
                            },
                        },
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 6
                            },
                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "String",
                                FieldID: "Email",
                                Width: 10
                            },
                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "String",
                                FieldID: "Country",
                                Width: 5
                            },
                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "String",
                                FieldID: "City",
                                Width: 5
                            },
                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "String",
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

    accounts_SelectionTypeMulti: any = { // 4.
        List: {
            Key: "accounts_SelectionTypeMulti",
            Name: "Accounts Selection Type Multi",
            Resource: { Name: "accounts", AddonUUID: "" },
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 6
                            },

                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "String",
                                FieldID: "Email",
                                Width: 10
                            },

                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "String",
                                FieldID: "Country",
                                Width: 5
                            },

                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "String",
                                FieldID: "City",
                                Width: 5
                            },

                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "String",
                                FieldID: "Type",
                                Width: 5
                            },

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

    accounts_SelectionTypeSingle: any = { // 5.
        List: {
            Key: "accounts_SelectionTypeSingle",
            Name: "Accounts Selection Type Single",
            Resource: { Name: "accounts", AddonUUID: "" },
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 6
                            },

                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "String",
                                FieldID: "Email",
                                Width: 10
                            },

                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "String",
                                FieldID: "Country",
                                Width: 5
                            },

                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "String",
                                FieldID: "City",
                                Width: 5
                            },

                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "String",
                                FieldID: "Type",
                                Width: 5
                            },

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

    accounts_SelectionTypeNone: any = { // 6.
        List: {
            Key: "accounts_SelectionTypeNone",
            Name: "Accounts Selection Type None",
            Resource: { Name: "accounts", AddonUUID: "" },
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 6
                            },

                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "String",
                                FieldID: "Email",
                                Width: 10
                            },

                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "String",
                                FieldID: "Country",
                                Width: 5
                            },

                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "String",
                                FieldID: "City",
                                Width: 5
                            },

                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "String",
                                FieldID: "Type",
                                Width: 5
                            },

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

    accounts_Menu: any = { // 7.
        List: {
            Key: "accounts_Menu",
            Name: "Accounts With Menu",
            Resource: { Name: "accounts", AddonUUID: "" },
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 6
                            },

                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "String",
                                FieldID: "Email",
                                Width: 10
                            },

                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "String",
                                FieldID: "Country",
                                Width: 5
                            },

                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "String",
                                FieldID: "City",
                                Width: 5
                            },

                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "String",
                                FieldID: "Type",
                                Width: 5
                            },

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

    accounts_MenuHostingAddonFunc: any = { // 8.
        List: {
            Key: "accounts_MenuHostingAddonFunc",
            Name: "Accounts Menu With Hosting Addon functionality",
            Resource: { Name: "accounts", AddonUUID: "" },
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 6
                            },

                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "String",
                                FieldID: "Email",
                                Width: 10
                            },

                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "String",
                                FieldID: "Country",
                                Width: 5
                            },

                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "String",
                                FieldID: "City",
                                Width: 5
                            },

                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "String",
                                FieldID: "Type",
                                Width: 5
                            },

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

    accounts_MenuFull: any = { // 9.
        List: {
            Key: "accounts_MenuFull",
            Name: "Accounts With Menu Full",
            Resource: { Name: "accounts", AddonUUID: "" },
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 6
                            },

                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "String",
                                FieldID: "Email",
                                Width: 10
                            },

                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "String",
                                FieldID: "Country",
                                Width: 5
                            },

                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "String",
                                FieldID: "City",
                                Width: 5
                            },

                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "String",
                                FieldID: "Type",
                                Width: 5
                            },

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

    accounts_LineMenu: any = { // 10.
        List: {
            Key: "accounts_LineMenu",
            Name: "Accounts With Line Menu",
            Resource: { Name: "accounts", AddonUUID: "" },
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 6
                            },

                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "String",
                                FieldID: "Email",
                                Width: 10
                            },

                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "String",
                                FieldID: "Country",
                                Width: 5
                            },

                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "String",
                                FieldID: "City",
                                Width: 5
                            },

                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "String",
                                FieldID: "Type",
                                Width: 5
                            },

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

    items_LineMenuSelectionTypeMulti: any = { // 11.
        List: {
            Key: "items_LineMenuSelectionTypeMulti",
            Name: "Items with Line Menu (Selection Type 'Multi')",
            Resource: { Name: "items", AddonUUID: "" },
            Views: [
                {
                    Key: "Items Line Menu Selection Multi",
                    Type: "Grid",
                    Title: "Items Line Menu Selection Multi",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 7
                            },

                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "String",
                                FieldID: "ExternalID",
                                Width: 4
                            },

                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "String",
                                FieldID: "MainCategory",
                                Width: 4
                            },

                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "Price",
                                Width: 2
                            },

                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "CostPrice",
                                Width: 3
                            },

                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "String",
                                FieldID: "UPC",
                                Width: 3
                            },

                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "String",
                                FieldID: "LongDescription",
                                Width: 15
                            },

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

    items_Search: any = { // 12.
        List: {
            Key: "items_Search",
            Name: "Items With Search (Name, Category, Description)",
            Resource: { Name: "items", AddonUUID: "" },
            Views: [
                {
                    Key: "Items",
                    Type: "Grid",
                    Title: "Items",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 7
                            },

                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "String",
                                FieldID: "ExternalID",
                                Width: 4
                            },

                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "String",
                                FieldID: "MainCategory",
                                Width: 4
                            },

                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "Price",
                                Width: 2
                            },

                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "String",
                                FieldID: "UPC",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "String",
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

    accounts_SmartSearch: any = { // 13.
        List: {
            Key: "accounts_SmartSearch",
            Name: "Accounts With Smart Search (Name)",
            Resource: { Name: "accounts", AddonUUID: "" },
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 6
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "String",
                                FieldID: "Email",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "String",
                                FieldID: "Country",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "String",
                                FieldID: "City",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "String",
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

    accounts_SortingAscending: any = { // 14.
        List: {
            Key: "accounts_SortingAscending",
            Name: "Accounts Sorting by Name Acsending",
            Resource: { Name: "accounts", AddonUUID: "" },
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 6
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "String",
                                FieldID: "Email",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "String",
                                FieldID: "Country",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "String",
                                FieldID: "City",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "String",
                                FieldID: "Type",
                                Width: 5
                            },
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

    accounts_SortingDescending: any = { // 15.
        List: {
            Key: "accounts_SortingDescending",
            Name: "Accounts Sorting by Name Decsending",
            Resource: { Name: "accounts", AddonUUID: "" },
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 6
                            },
                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "String",
                                FieldID: "Email",
                                Width: 10
                            },
                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "String",
                                FieldID: "Country",
                                Width: 5
                            },
                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "String",
                                FieldID: "City",
                                Width: 5
                            },
                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "String",
                                FieldID: "Type",
                                Width: 5
                            },
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

    items_SearchString: any = { // 16.
        List: {
            Key: "items_SearchString",
            Name: "Items - Search String",
            Resource: { Name: "items", AddonUUID: "" },
            Views: [
                {
                    Key: "Items",
                    Type: "Grid",
                    Title: "Items",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 7
                            },
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "String",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "String",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "Price",
                                Width: 2
                            },
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "String",
                                FieldID: "UPC",
                                Width: 3
                            },
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "String",
                                FieldID: "LongDescription",
                                Width: 15
                            },
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
                        FieldID: "ExternalID"
                    },
                ]
            },
        },
        State: {
            ListKey: "items_SearchString",
            SearchString: "MaNa"
        }
    }

    items_PageTypePages: any = { // 17.
        List: {
            Key: "items_PageTypePages",
            Name: "Items Page Type 'Pages'",
            Resource: { Name: "items", AddonUUID: "" },
            Views: [
                {
                    Key: "Items Page Type Pages",
                    Type: "Grid",
                    Title: "Items Page Type Pages",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 7
                            },
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "String",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "String",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "Price",
                                Width: 2
                            },
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "String",
                                FieldID: "UPC",
                                Width: 3
                            },
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "String",
                                FieldID: "LongDescription",
                                Width: 15
                            },
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

    items_PageTypePages_PageSize: any = { // 18.
        List: {
            Key: "items_PageTypePages_PageSize",
            Name: "Items Page Type 'Pages' with Page Size",
            Resource: { Name: "items", AddonUUID: "" },
            Views: [
                {
                    Key: "Items Pages Page Size",
                    Type: "Grid",
                    Title: "Items Pages Page Size",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 7
                            },
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "String",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "String",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "Price",
                                Width: 2
                            },
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "String",
                                FieldID: "UPC",
                                Width: 3
                            },
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "String",
                                FieldID: "LongDescription",
                                Width: 15
                            },
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

    items_PageTypePages_PageIndex: any = { // 19.
        List: {
            Key: "items_PageTypePages_PageIndex",
            Name: "Items Page Type 'Pages' with Page Index",
            Resource: { Name: "items", AddonUUID: "" },
            Views: [
                {
                    Key: "Items Pages Page Index",
                    Type: "Grid",
                    Title: "Items Pages Page Index",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 7
                            },
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "String",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "String",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "Price",
                                Width: 2
                            },
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "String",
                                FieldID: "UPC",
                                Width: 3
                            },
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "String",
                                FieldID: "LongDescription",
                                Width: 15
                            },
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

    items_PageTypePages_TopScrollIndex: any = { // 20.
        List: {
            Key: "items_PageTypePages_TopScrollIndex",
            Name: "Items Page Type 'Pages' with Top Scroll Index",
            Resource: { Name: "items", AddonUUID: "" },
            Views: [
                {
                    Key: "Items Pages Top Scroll Index",
                    Type: "Grid",
                    Title: "Items Pages Top Scroll Index",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 7
                            },
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "String",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "String",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "Price",
                                Width: 2
                            },
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "String",
                                FieldID: "UPC",
                                Width: 3
                            },
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "String",
                                FieldID: "LongDescription",
                                Width: 15
                            },
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

    items_PageTypePages_PageSizePageIndex: any = { // 21.
        List: {
            Key: "items_PageTypePages_PageSizePageIndex",
            Name: "Items Page Type 'Pages' with Page Size & Page Index",
            Resource: { Name: "items", AddonUUID: "" },
            Views: [
                {
                    Key: "Items Pages Page Size & Page Index",
                    Type: "Grid",
                    Title: "Items Pages Page Size & Page Index",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 7
                            },
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "String",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "String",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "Price",
                                Width: 2
                            },
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "String",
                                FieldID: "UPC",
                                Width: 3
                            },
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "String",
                                FieldID: "LongDescription",
                                Width: 15
                            },
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

    items_PageTypePages_PageSizePageIndexTopScrollIndex: any = { // 22.
        List: {
            Key: "items_PageTypePages_PageSizePageIndexTopScrollIndex",
            Name: "Items Page Type 'Pages' with Page Size, Page Index and Top Scroll Index",
            Resource: { Name: "items", AddonUUID: "" },
            Views: [
                {
                    Key: "Items Pages Page Size Page Index Top Scroll Index",
                    Type: "Grid",
                    Title: "Items Pages Page Size, Page Index, Top Scroll Index",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 7
                            },
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "String",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "String",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "Price",
                                Width: 2
                            },
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "String",
                                FieldID: "UPC",
                                Width: 3
                            },
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "String",
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

    items_PageTypeScroll: any = { // 23.
        List: {
            Key: "items_PageTypeScroll",
            Name: "Items Page Type 'Scroll'",
            Resource: { Name: "items", AddonUUID: "" },
            Views: [
                {
                    Key: "Items Page Type Scroll",
                    Type: "Grid",
                    Title: "Items Page Type Scroll",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 7
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "String",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "String",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "Price",
                                Width: 2
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "String",
                                FieldID: "UPC",
                                Width: 3
                            },

                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "String",
                                FieldID: "LongDescription",
                                Width: 15
                            },

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

    items_PageTypeScroll_TopScrollIndex: any = { // 24.
        List: {
            Key: "items_PageTypeScroll_TopScrollIndex",
            Name: "Items: Page Type 'Scroll' with Top Scroll Index",
            Resource: { Name: "items", AddonUUID: "" },
            Views: [
                {
                    Key: "Items Scroll Top Scroll Index",
                    Type: "Grid",
                    Title: "Items Scroll Top Scroll Index",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 7
                            },

                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "String",
                                FieldID: "ExternalID",
                                Width: 4
                            },

                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "String",
                                FieldID: "MainCategory",
                                Width: 4
                            },

                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "Price",
                                Width: 2
                            },

                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "CostPrice",
                                Width: 3
                            },

                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "String",
                                FieldID: "UPC",
                                Width: 3
                            },

                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "String",
                                FieldID: "LongDescription",
                                Width: 15
                            },

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

    items_PageTypeScroll_PageIndex: any = { // 25.
        List: {
            Key: "items_PageTypeScroll_PageIndex",
            Name: "Items Page Type 'Scroll' with Page Index",
            Resource: { Name: "items", AddonUUID: "" },
            Views: [
                {
                    Key: "Items Scroll Page Index",
                    Type: "Grid",
                    Title: "Items Scroll Page Index",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 7
                            },

                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "String",
                                FieldID: "ExternalID",
                                Width: 4
                            },

                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "String",
                                FieldID: "MainCategory",
                                Width: 4
                            },

                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "Price",
                                Width: 2
                            },

                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "CostPrice",
                                Width: 3
                            },

                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "String",
                                FieldID: "UPC",
                                Width: 3
                            },

                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "String",
                                FieldID: "LongDescription",
                                Width: 15
                            },

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

    items_PageTypeScroll_PageIndexTopScrollIndex: any = { // 26.
        List: {
            Key: "items_PageTypeScroll_PageIndexTopScrollIndex",
            Name: "Items Page Type 'Scroll' with Page Index and Top Scroll Index",
            Resource: { Name: "items", AddonUUID: "" },
            Views: [
                {
                    Key: "Items Scroll Page Index Top Scroll Index",
                    Type: "Grid",
                    Title: "Items Scroll Page Index Top Scroll Index",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 7
                            },

                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "String",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "String",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "Price",
                                Width: 2
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "String",
                                FieldID: "UPC",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "String",
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

    items_PageTypeScroll_PageSizePageIndex: any = { // 27.
        List: {
            Key: "items_PageTypeScroll_PageSizePageIndex",
            Name: "Items Page Type 'Scroll' with Page Size and Page Index",
            Resource: { Name: "items", AddonUUID: "" },
            Views: [
                {
                    Key: "Items Scroll Page Size Page Index",
                    Type: "Grid",
                    Title: "Items Scroll Page Size Page Index",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 7
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "String",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "String",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "Price",
                                Width: 2
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "String",
                                FieldID: "UPC",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "String",
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

    items_PageTypeScroll_PageSizePageIndexTopScrollIndex: any = { // 28.
        List: {
            Key: "items_PageTypeScroll_PageSizePageIndexTopScrollIndex",
            Name: "Items Page Type 'Scroll' with Page Size, Page Index and Top Scroll Index",
            Resource: { Name: "items", AddonUUID: "" },
            Views: [
                {
                    Key: "Items Scroll Page Size Page Index Top Scroll Index",
                    Type: "Grid",
                    Title: "Items Scroll Page Size Page Index Top Scroll Index",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 7
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "String",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "String",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "Price",
                                Width: 2
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "String",
                                FieldID: "UPC",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Description",
                            Configuration: {
                                Type: "String",
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

    accounts_full: any = { // 29.
        List: {
            Key: "accounts_full",
            Name: "Accounts Full",
            Resource: { Name: "accounts", AddonUUID: "" },
            Views: [
                {
                    Key: "Accounts full",
                    Type: "Grid",
                    Title: "Accounts Full",
                    Blocks: [
                        {
                            Title: "Account Key",
                            Configuration: {
                                Type: "String",
                                FieldID: "Key",
                                Width: 15
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 6
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "String",
                                FieldID: "Email",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "String",
                                FieldID: "Country",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "String",
                                FieldID: "City",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "String",
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
            Sorting: { Ascending: true, FieldID: "Name" }
        },
        State: {
            ListKey: "accounts_full",
            PageSize: 8,
            PageIndex: 1,
            TopScrollIndex: 6,
            PageType: "Pages", // "Pages" / "Scroll"
            SearchString: "a"
        }
    }

    items_Full2Views: any = { // 30.
        List: {
            Key: "items_Full2Views",
            Name: "Items Full - 2 Views",
            Resource: { Name: "items", AddonUUID: "" },
            Views: [
                {
                    Key: "Items First View",
                    Type: "Grid",
                    Title: "Items Name Main Category",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 7
                            },
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "String",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                        },
                        {
                            Title: "Main Category",
                            Configuration: {
                                Type: "String",
                                FieldID: "MainCategory",
                                Width: 4
                            },
                        },
                    ],
                },
                {
                    Key: "Items Second View",
                    Type: "Grid",
                    Title: "Items Name Price",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 7
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "External ID",
                            Configuration: {
                                Type: "String",
                                FieldID: "ExternalID",
                                Width: 4
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "Price",
                                Width: 2
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Cost Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "CostPrice",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "UPC",
                            Configuration: {
                                Type: "String",
                                FieldID: "UPC",
                                Width: 3
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
                    {
                        FieldID: "ExternalID",
                        Title: "External ID",
                        Type: "String"
                    },
                ]
            },
            SelectionType: "Single", // "Multi" / "None" / "Single"
            Sorting: { Ascending: true, FieldID: "Name" }
        },
        State: {
            ListKey: "items_Full2Views",
            PageSize: 8,
            PageIndex: 1,
            TopScrollIndex: 6,
            PageType: "Pages", // "Pages" / "Scroll"
            SearchString: "a"
        }
    }

    accounts_TestDrawGridRelation: any = { // 31.
        List: {
            Key: "accounts_TestDrawGridRelation",
            Name: "Accounts Test Draw Grid Relation",
            Resource: { Name: "accounts", AddonUUID: "" },
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts Test Draw",
                    Blocks: [
                        {
                            Title: "Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 7
                            },
                            DrawURL: 'addon-cpi/testDrawGrid',
                            AddonUUID: 'cd3ba412-66a4-42f4-8abc-65768c5dc606'
                        },
                        {
                            Title: "Email",
                            Configuration: {
                                Type: "String",
                                FieldID: "Email",
                                Width: 15
                            },
                            DrawURL: 'addon-cpi/testDrawGrid',
                            AddonUUID: 'cd3ba412-66a4-42f4-8abc-65768c5dc606'
                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "String",
                                FieldID: "Country",
                                Width: 3
                            },
                            DrawURL: 'addon-cpi/testDrawGrid',
                            AddonUUID: 'cd3ba412-66a4-42f4-8abc-65768c5dc606'
                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "String",
                                FieldID: "City",
                                Width: 2
                            },
                            DrawURL: 'addon-cpi/testDrawGrid',
                            AddonUUID: 'cd3ba412-66a4-42f4-8abc-65768c5dc606'
                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "String",
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
            ListKey: "accounts_TestDrawGridRelation",
        }
    }

    referenceAccount_2Views: any = { // 32.
        List: {
            Key: "referenceAccount_2Views",
            Name: "Reference Account",
            Resource: { Name: "ReferenceAccountAuto", AddonUUID: "" },
            Views: [
                {
                    Key: "reference accout best seller",
                    Type: "Grid", // "Cards"
                    Title: "Best Seller",
                    Blocks: [
                        {
                            Title: "Account Key",
                            Configuration: {
                                Type: "String",
                                FieldID: "of_account",
                                Width: 15
                            },
                        },
                        {
                            Title: "Best Seller Item",
                            Configuration: {
                                Type: "String",
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
                                Type: "String",
                                FieldID: "of_account",
                                Width: 15
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Max Quantity",
                            Configuration: {
                                Type: "String",
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
        },
        State: {
            ListKey: "referenceAccount_2Views",
            PageSize: 7, // Default: 25
            PageIndex: 2, // Default: 1
            PageType: "Scroll", // Default: "Pages" / "Scroll"
        }
    }

    filtersAccRef_2Views: any = { // 33.
        List: {
            Key: "filtersAccRef_2Views",
            Name: "Filters Acc Ref ABI View",
            Resource: { Name: "FiltersAccRefAuto", AddonUUID: "" },
            Views: [
                {
                    Key: "account additional fields",
                    Type: "Grid",
                    Title: "Additional Indexed Fields",
                    Blocks: [
                        {
                            Title: "Item",
                            Configuration: {
                                Type: "String",
                                FieldID: "item",
                                Width: 5
                            },
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "price",
                                Width: 5
                            },
                        },
                        {
                            Title: "Quantity",
                            Configuration: {
                                Type: "String",
                                FieldID: "quantity",
                                Width: 6
                            },
                        },
                        {
                            Title: "In Stock",
                            Configuration: {
                                Type: "String",
                                FieldID: "instock",
                                Width: 2
                            },
                        },
                        {
                            Title: "Account Key",
                            Configuration: {
                                Type: "String",
                                FieldID: "from_account",
                                Width: 12
                            },
                        },
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "from_account.Name",
                                Width: 6
                            },
                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "String",
                                FieldID: "from_account.Email",
                                Width: 10
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
                                Type: "String",
                                FieldID: "from_account",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Item",
                            Configuration: {
                                Type: "String",
                                FieldID: "item",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Price",
                            Configuration: {
                                Type: "String",
                                FieldID: "price",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Quantity",
                            Configuration: {
                                Type: "String",
                                FieldID: "quantity",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "In Stock",
                            Configuration: {
                                Type: "String",
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

    accounts_causedErrorInDrawFunc: any = { // 34.
        List: {
            Key: "accounts_causedErrorInDrawFunc",
            Name: "Accounts - throw Error due to wrong AddonUUID",
            Resource: { Name: "accounts", AddonUUID: "" },
            Views: [
                {
                    Key: "Accounts",
                    Type: "Grid",
                    Title: "Accounts",
                    Blocks: [
                        {
                            Title: "Account Key",
                            Configuration: {
                                Type: "String",
                                FieldID: "Key",
                                Width: 15
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe'
                        },
                        {
                            Title: "Account Name",
                            Configuration: {
                                Type: "String",
                                FieldID: "Name",
                                Width: 6
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe'
                        },
                        {
                            Title: "Account Email",
                            Configuration: {
                                Type: "String",
                                FieldID: "Email",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe'
                        },
                        {
                            Title: "Country",
                            Configuration: {
                                Type: "String",
                                FieldID: "Country",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe'
                        },
                        {
                            Title: "City",
                            Configuration: {
                                Type: "String",
                                FieldID: "City",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe'
                        },
                        {
                            Title: "Type",
                            Configuration: {
                                Type: "String",
                                FieldID: "Type",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe'
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
            ListKey: "accounts_causedErrorInDrawFunc",
        }
    }

    arraysOfPrimitives: any = { // 35.
        List: {
            Key: "arraysOfPrimitives",
            Name: "Arrays Of Primitives - Numbers, Names, Reals (Test Draw Array)",
            Resource: { Name: "ArraysOfPrimitivesAuto", AddonUUID: "" },
            Views: [
                {
                    Key: "Arrays Of Primitives",
                    Type: "Grid",
                    Title: "Arrays Of Primitives",
                    Blocks: [
                        {
                            Title: "Numbers",
                            Configuration: {
                                Type: "String",
                                FieldID: "numbers",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Names",
                            Configuration: {
                                Type: "String",
                                FieldID: "names",
                                Width: 10
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Reals",
                            Configuration: {
                                Type: "String",
                                FieldID: "reals",
                                Width: 10
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
            ListKey: "arraysOfPrimitives",
        }
    }

    containedArray: any = { // 36.
        List: {
            Key: "containedArray",
            Name: "Contained Array - Scheme Only Name Age (Test Draw Array)",
            Resource: { Name: "ContainedArray", AddonUUID: "" },
            Views: [
                {
                    Key: "Contained Array",
                    Type: "Grid",
                    Title: "Contained Array",
                    Blocks: [
                        {
                            Title: "Title",
                            Configuration: {
                                Type: "String",
                                FieldID: "title",
                                Width: 5
                            },
                            DrawURL: 'addon-cpi/drawGrid',
                            AddonUUID: '0e2ae61b-a26a-4c26-81fe-13bdd2e4aaa3'
                        },
                        {
                            Title: "Contained Scheme Only Name Age",
                            Configuration: {
                                Type: "String",
                                FieldID: "contained_scheme_only_name_age",
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
            ListKey: "containedArray",
        }
    }

    // https://pepperi.atlassian.net/browse/DI-24421 - to create a container 37 of IndexedFieldsAuto
}