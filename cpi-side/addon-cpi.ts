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
    req.context?.client?.navigateTo({ url: '' });
    // console.log('req: ', JSON.stringify(req, null, 2));
    // req.context?.client?.openURI({ uri: '' });
});