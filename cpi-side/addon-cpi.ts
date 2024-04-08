import '@pepperi-addons/cpi-node'

export async function load(configuration: any) {

}

export const router = Router();

router.post('/drawTest', (req, res) => {
    return res.json({
        Result: [
            {
                Key: 'test',
                Title: 'Test',
                DrawURL: 'addon-cpi/drawTest',
                AddonUUID: 'cd3ba412-66a4-42f4-8abc-65768c5dc606',
                ExecuteURL: 'addon-cpi/menuExecutionTest'
            }
        ]
    })
});

router.post('/menuExecutionTest', (req, res) => {
    return res.json({
        State: { ...req.body.State, SearchString: "Hello World" }
    })
});

router.post('/drawNavigateHome', (req, res) => {
    return res.json({
        Result: [
            {
                Key: 'navigateHome',
                Title: 'Go To Home Page',
                DrawURL: 'addon-cpi/drawNavigateHome',
                AddonUUID: 'cd3ba412-66a4-42f4-8abc-65768c5dc606',
                ExecuteURL: 'addon-cpi/menuExecutionGoHome'
            }
        ]
    })
});

router.post('/menuExecutionGoHome', (req, res) => {
    req.context?.client?.navigateTo({ url: '/HomePage' });
});

router.post('/testDrawGrid', (req, res) => {
    const data = req.body.Data;
    const viewBlocks = req.body.ViewBlocks;
    const grid: {}[] = [];
    data.forEach(listing => {
        const itemsValuesByViewBlocksKeys: string[] = [];
        viewBlocks.forEach(viewBlock => {
            const fieldID = viewBlock.Configuration.FieldID;
            itemsValuesByViewBlocksKeys.push(`${fieldID} : ${listing[fieldID]}`)
        });
        grid.push(
            {
                Name: listing.Key,
                Email: itemsValuesByViewBlocksKeys,
                Country: listing.Name,
                City: 'Test',
                Type: 'QA'
            }
        )
    })
    return res.json({ Data: grid })
});

router.post('/drawReloadListTest', (req, res) => {
    return res.json({
        Result: [
            {
                Key: 'ReloadListTest',
                Title: 'Reload Calls CPI - test',
                DrawURL: 'addon-cpi/drawReloadListTest',
                AddonUUID: 'cd3ba412-66a4-42f4-8abc-65768c5dc606',
                ExecuteURL: 'addon-cpi/menuExecutionReloadListTest'
            }
        ]
    })
});

router.post('/menuExecutionReloadListTest', (req, res) => {
    return res.json({ State: { ...req.body.State }, Actions: [{ Type: "Reload" }] });
});

router.post('/drawRefreshListTest', (req, res) => {
    return res.json({
        Result: [
            {
                Key: 'RefreshListTest',
                Title: 'Refresh DO NOT Call CPI - test',
                DrawURL: 'addon-cpi/drawRefreshListTest',
                AddonUUID: 'cd3ba412-66a4-42f4-8abc-65768c5dc606',
                ExecuteURL: 'addon-cpi/menuExecutionRefreshListTest'
            }
        ]
    })
});

router.post('/menuExecutionRefreshListTest', (req, res) => {
    return res.json({ State: { ...req.body.State }, Actions: [{ Type: "Refresh" }] });
});