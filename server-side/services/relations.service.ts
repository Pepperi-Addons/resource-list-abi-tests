import { PapiClient, InstalledAddon, Relation } from '@pepperi-addons/papi-sdk'
import { Client } from '@pepperi-addons/debug-server';

export class RelationsService {

    papiClient: PapiClient
    bundleFileName = '';

    constructor(private client: Client) {
        this.papiClient = new PapiClient({
            baseURL: client.BaseURL,
            token: client.OAuthAccessToken,
            addonUUID: client.AddonUUID,
            addonSecretKey: client.AddonSecretKey,
            actionUUID: client.ActionUUID
        });
        
        this.bundleFileName = `file_${this.client.AddonUUID}`;
    }
    
    // For page block template
    private async upsertRelation(relation): Promise<any> {
        return await this.papiClient.post('/addons/data/relations', relation);
    }

    private getCommonRelationProperties(
        relationName: 'SettingsBlock' | 'PageBlock' | 'AddonBlock', 
        blockRelationName: string,
        blockRelationDescription: string,
        blockName: string
    ): Relation {
        return {
            RelationName: relationName,
            Name: blockRelationName,
            Description: blockRelationDescription,
            Type: "NgComponent",
            SubType: "NG14",
            AddonUUID: this.client.AddonUUID,
            AddonRelativeURL: this.bundleFileName,
            ComponentName: `${blockName}Component`, // This is should be the block component name (from the client-side)
            ModuleName: `${blockName}Module`, // This is should be the block module name (from the client-side)
            ElementsModule: 'WebComponents',
            ElementName: `${blockName.toLocaleLowerCase()}-element-${this.client.AddonUUID}`,
        };
    }

    private async upsertSettingsRelation(blockRelationSlugName: string, blockRelationGroupName: string, blockRelationName: string, blockRelationDescription: string) {
        const blockName = 'Settings';

        const blockRelation: Relation = this.getCommonRelationProperties(
            'SettingsBlock',
            blockRelationName,
            blockRelationDescription,
            blockName);

        blockRelation['SlugName'] = blockRelationSlugName;
        blockRelation['GroupName'] = blockRelationGroupName;
        
        return await this.upsertRelation(blockRelation);
    }

    private async upsertBlockRelation(blockRelationName: string, isPageBlock: boolean): Promise<any> {
        const blockName = 'Block';

        const blockRelation: Relation = this.getCommonRelationProperties(
            isPageBlock ? 'PageBlock' : 'AddonBlock',
            blockRelationName,
            `${blockRelationName} block`,
            blockName);

        // For Page block we need to declare the editor data.
        if (isPageBlock) {
            blockRelation['EditorComponentName'] = `${blockName}EditorComponent`; // This is should be the block editor component name (from the client-side)
            blockRelation['EditorModuleName'] = `${blockName}EditorModule`; // This is should be the block editor module name (from the client-side)}
            blockRelation['EditorElementName'] = `${blockName.toLocaleLowerCase()}-editor-element-${this.client.AddonUUID}`;
        }
        
        return await this.upsertRelation(blockRelation);
    }

    async upsertRelations() {
        // For settings block use this.
        const blockRelationSlugName = 'resource_list_abi';
        const blockRelationGroupName = 'Resource List ABI';
        const blockRelationName = 'RL_ABI';
        const blockRelationDescription = 'Resource List ABI';
        await this.upsertSettingsRelation(blockRelationSlugName, blockRelationGroupName, blockRelationName, blockRelationDescription);
        await this.upsertListMenuBlockRelation('test reload', 'Reload List', 'addon-cpi/drawReloadListTest', 'addon-cpi/menuExecutionReloadListTest');
        await this.upsertListMenuBlockRelation('test refresh', 'Refresh List', 'addon-cpi/drawRefreshListTest', 'addon-cpi/menuExecutionRefreshListTest');

        // For page block use this.
        // // TODO: change to block name (this is the unique relation name and the description that will be on the block).
        // const blockRelationName = 'CHANGE_TO_BLOCK_RELATION_NAME';
        // await this.upsertBlockRelation(blockRelationName, true);

        // For addon block use this.
        // // TODO: change to block name (this is the unique relation name and the description that will be on the block).
        // const blockRelationName = 'CHANGE_TO_BLOCK_RELATION_NAME';
        // await this.upsertBlockRelation(blockRelationName, false);
    }

    async upsertListMenuBlockRelation(fieldID: string, name: string, drawURL: string, executeURL: string){
        try {
            const relation: Relation = {
                FieldID: fieldID,
                AddonUUID: "cd3ba412-66a4-42f4-8abc-65768c5dc606",
                AddonRelativeURL: '',
                RelationName: "ListMenuBlock",
                Name: name,
                DrawURL: drawURL,
                ExecuteURL: executeURL,
                Type: "AddonAPI",
            }
            return await this.upsertRelation(relation)
        }
        catch (err){
            throw (`error when upsert ${name} list menu block relations. error: ${err}`)
        }
    }
}