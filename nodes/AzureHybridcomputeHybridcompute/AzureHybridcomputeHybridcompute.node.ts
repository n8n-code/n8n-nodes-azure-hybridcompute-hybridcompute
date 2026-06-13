import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureHybridcomputeHybridcompute implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Hybridcompute Hybridcompute',
                name: 'N8nDevAzureHybridcomputeHybridcompute',
                icon: { light: 'file:./azure-hybridcompute-hybridcompute.png', dark: 'file:./azure-hybridcompute-hybridcompute.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Hybrid Compute Management Client.',
                defaults: { name: 'Azure Hybridcompute Hybridcompute' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureHybridcomputeHybridcomputeApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
