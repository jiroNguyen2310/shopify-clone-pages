


import { BlockStack, Box, InlineStack } from '@shopify/polaris';
import { useState } from 'react';

// Types
interface NodeData {
    type: string;
    key: string;
    children: string[];
    additional_data: {
        element_name?: string;
        [key: string]: any;
    };
    style?: string;
    shop?: string;
    id?: number;
    style_tablet?: string | null;
    style_mobile?: string;
    box_set_step_id?: number;
    created_at?: string;
    updated_at?: string;
    translation?: {
        [key: string]: string;
    };
}

interface DataMap {
    [key: string]: NodeData;
}

interface TreeNodeProps {
    node: NodeData;
    dataMap: DataMap;
    level?: number;
}
const dataRaw: NodeData[] = [
    {
        "type": "CONTAINER_ROOT",
        "key": "4f46d663-f6f1-4836-a315-a977e3861522",
        "children": [
            "1b51692e-5357-4070-8b1c-acd745059054",
            "890e9fab-4d52-42c7-8dd9-66c043fa7456",
            "740497d9-fe29-4035-9a25-817bd313738d",
            "e91572e2-8097-4175-8e4f-d41194948118"
        ],
        "additional_data": {},
        "style": "width: 100%; height: fit-content; font-size: 16px; display: flex; flex-direction: column; background-color: rgba(255, 255, 255, 0);",
        "shop": "kurobaedo.myshopify.com",
        "id": 17661,
        "style_tablet": null,
        "style_mobile": "",
        "box_set_step_id": 1055469,
        "created_at": "2025-09-26T12:46:24.398Z",
        "updated_at": "2025-09-28T14:07:33.931Z"
    },
    {
        "type": "GROUP",
        "key": "5e08c846-d731-47e3-a67e-0f01825b7851",
        "children": [
            "7047d276-efce-41b3-8337-a7b5b604022a"
        ],
        "additional_data": {
            "element_name": "Text Group"
        },
        "style": "font-family: Inter; width: 100%; height: fit-content; font-size: 16px; padding: 16px 16px 16px 40px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); gap: 10px; display: flex; flex-direction: column; align-items: start; justify-content: start;",
        "shop": "kurobaedo.myshopify.com",
        "id": 23071,
        "style_tablet": "",
        "style_mobile": "gap: 16px; padding: 0px; width: 80%;",
        "box_set_step_id": 1055469,
        "created_at": "2025-09-26T12:46:24.398Z",
        "updated_at": "2025-09-26T12:46:24.394Z"
    },
    {
        "type": "GROUP",
        "key": "2d249e98-b74a-44e6-afc0-ac695f5b7cf5",
        "children": [
            "5d1f3a3a-78b5-41a5-b5de-f8f328213a9a",
            "ae0cb46c-0440-459b-8465-31bddbda36f5"
        ],
        "additional_data": {
            "element_name": "Text Group"
        },
        "style": "width: unset; height: fit-content; font-size: 16px; font-family: Inter; width: 100%; height: fit-content; font-size: 16px; display: flex; flex-direction: column; padding: 16px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: flex; flex-direction: column; justify-content: center; width: 50%; gap: 16px;",
        "shop": "kurobaedo.myshopify.com",
        "id": 23073,
        "style_tablet": "",
        "style_mobile": "width: 100%; min-width: 100%; gap: 16px;",
        "box_set_step_id": 1055469,
        "created_at": "2025-09-26T12:51:27.841Z",
        "updated_at": "2025-09-26T12:51:27.838Z"
    },
    {
        "type": "TEXT",
        "key": "ae0cb46c-0440-459b-8465-31bddbda36f5",
        "children": [],
        "additional_data": {
            "element_name": "Text",
            "global_typography_preset": "custom"
        },
        "style": "width: unset; height: fit-content; font-size: 16px; font-family: Inter; width: 100%; height: fit-content; font-size: 16px; letter-spacing: 0em; text-align: left; line-height: 1.1em; color: rgb(0, 0, 0); font-size: 16px; text-align: center; font-weight: 500;",
        "shop": "kurobaedo.myshopify.com",
        "id": 24363,
        "style_tablet": "",
        "style_mobile": "font-size: 14px;",
        "box_set_step_id": 1055469,
        "created_at": "2025-09-26T12:51:27.841Z",
        "updated_at": "2025-09-28T14:07:33.931Z",
        "translation": {
            "default": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"color: rgb(31, 29, 29); white-space: pre-wrap;\">Some content body text goes here, giving a brief overview of your box and available discounts.</span></p>"
        }
    },
    {
        "type": "HEADING",
        "key": "7047d276-efce-41b3-8337-a7b5b604022a",
        "children": [],
        "additional_data": {
            "element_name": "Heading",
            "global_typography_preset": "h1",
            "content": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Heading</span></p>"
        },
        "style": "font-family: Inter; height: fit-content; letter-spacing: normal; font-size: 48px; text-align: left; width: 100%; font-weight: 700; line-height: 1.2em; text-transform: none;",
        "shop": "kurobaedo.myshopify.com",
        "id": 20929,
        "style_tablet": "",
        "style_mobile": "font-size: 24px; text-align: center; width: 90%;",
        "box_set_step_id": 1055469,
        "created_at": "2025-09-26T12:46:24.398Z",
        "updated_at": "2025-09-26T12:46:24.394Z",
        "translation": {
            "default": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"color: rgb(255, 255, 255); white-space: pre-wrap;\">Build Your Box</span></p>"
        }
    },
    {
        "type": "HEADING",
        "key": "5d1f3a3a-78b5-41a5-b5de-f8f328213a9a",
        "children": [],
        "additional_data": {
            "element_name": "Heading",
            "global_typography_preset": "custom"
        },
        "style": "width: unset; height: fit-content; font-size: 16px; font-family: Inter; width: 100%; height: fit-content; font-size: 48px; line-height: 1.2em; letter-spacing: 0em; text-align: left; font-weight: 700; color: rgb(0, 0, 0); font-size: 32px; text-align: center; font-weight: 700; line-height: 1.2em;",
        "shop": "kurobaedo.myshopify.com",
        "id": 20932,
        "style_tablet": "",
        "style_mobile": "font-size: 24px;",
        "box_set_step_id": 1055469,
        "created_at": "2025-09-26T12:51:27.841Z",
        "updated_at": "2025-09-28T14:07:33.931Z",
        "translation": {
            "default": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"color: rgb(36, 34, 34); white-space: pre-wrap;\">Heading</span></p>"
        }
    },
    {
        "type": "PRODUCT_COLLECTION_LIST",
        "key": "e91572e2-8097-4175-8e4f-d41194948118",
        "children": [],
        "additional_data": {
            "source_type": "PRODUCTS",
            "element_name": "Product List: Grid",
            "enable_filters": false,
            "enable_search_bar": false,
            "enable_sort": false,
            "enable_display_variant": false,
            "enable_display_name": true,
            "enable_display_price": true,
            "enable_quick_view": true,
            "config_name_variant": "{variantName}",
            "products": []
        },
        "style": "width: 100%; height: fit-content; font-size: 16px; margin: 0px;",
        "shop": "kurobaedo.myshopify.com",
        "id": 14109,
        "style_tablet": "",
        "style_mobile": "margin: 0px;",
        "box_set_step_id": 1055469,
        "created_at": "2025-09-26T12:46:24.398Z",
        "updated_at": "2025-09-26T12:46:24.395Z"
    },
    {
        "type": "IMAGE",
        "key": "45bf4485-b246-40dc-9623-568b3cfb5dec",
        "children": [],
        "additional_data": {
            "element_name": "Image",
            "image_desktop": "https://cdn.shopify.com/s/files/1/0932/2843/3730/files/byob-banner_97a691d3-d9a5-4d48-a34b-d7eefbed12f3.webp?v=1757404846",
            "image_mobile": "https://cdn.shopify.com/s/files/1/0932/2843/3730/files/byob-banner_16783443-a1b4-41f6-81d7-a7e561f843d2.webp?v=1757404850"
        },
        "style": "font-family: Inter; width: 100%; font-size: 16px; height: 100%; object-fit: cover; object-position: center center;",
        "shop": "kurobaedo.myshopify.com",
        "id": 11928,
        "style_tablet": "height: 100%; object-fit: cover;",
        "style_mobile": "height: 300px; object-fit: cover; object-position: center center;",
        "box_set_step_id": 1055469,
        "created_at": "2025-09-26T12:46:24.398Z",
        "updated_at": "2025-09-26T12:46:24.395Z",
        "translation": {}
    },
    {
        "type": "IMAGE",
        "key": "3105881f-f959-4aca-93f9-0f8f7c32b68b",
        "children": [],
        "additional_data": {
            "element_name": "Image 1",
            "image_desktop": "https://cdn.shopify.com/s/files/1/0772/9551/7921/files/chara_01.png?v=1759068352",
            "image_mobile": "",
            "preview_image": "https://cdn.shopify.com/s/files/1/0932/1391/7482/files/Group_4_2.png"
        },
        "style": "font-family: Inter; font-size: 16px; width: fit-content; height: unset; object-fit: cover;",
        "shop": "kurobaedo.myshopify.com",
        "id": 11929,
        "style_tablet": "",
        "style_mobile": "width: 100%; min-width: 100%;",
        "box_set_step_id": 1055469,
        "created_at": "2025-09-26T12:51:27.841Z",
        "updated_at": "2025-09-28T14:07:33.931Z",
        "translation": {}
    },
    {
        "type": "IMAGE",
        "key": "27c3070d-47e1-4b1d-bebf-e95bf9cd0d55",
        "children": [],
        "additional_data": {
            "element_name": "Image 2",
            "image_desktop": "https://cdn.shopify.com/s/files/1/0772/9551/7921/files/chara_08_101819ba-4516-4a4e-9c3b-2340ba006dd8.png?v=1759068359",
            "image_mobile": "",
            "preview_image": "https://cdn.shopify.com/s/files/1/0932/1391/7482/files/Group_5_2.png"
        },
        "style": "font-family: Inter; font-size: 16px; width: fit-content; height: unset; object-fit: cover;",
        "shop": "kurobaedo.myshopify.com",
        "id": 11930,
        "style_tablet": "",
        "style_mobile": "width: 100%; min-width: 100%;",
        "box_set_step_id": 1055469,
        "created_at": "2025-09-26T12:51:27.841Z",
        "updated_at": "2025-09-28T14:07:33.932Z",
        "translation": {}
    },
    {
        "type": "IMAGE",
        "key": "aacec2f4-00c9-4bea-a3aa-ddbd157e2026",
        "children": [],
        "additional_data": {
            "element_name": "Image 2",
            "image_desktop": "https://cdn.shopify.com/s/files/1/0772/9551/7921/files/chara_06.png?v=1759068426",
            "image_mobile": "",
            "preview_image": "https://cdn.shopify.com/s/files/1/0932/1391/7482/files/Group_5_2.png"
        },
        "style": "font-family: Inter; font-size: 16px; width: fit-content; height: unset; object-fit: cover;",
        "shop": "kurobaedo.myshopify.com",
        "id": 12051,
        "style_tablet": "",
        "style_mobile": "width: 100%; min-width: 100%;",
        "box_set_step_id": 1055469,
        "created_at": "2025-09-26T12:51:27.841Z",
        "updated_at": "2025-09-28T14:07:33.932Z",
        "translation": {}
    },
    {
        "type": "IMAGE",
        "key": "945b9979-71e6-48d0-95c3-8becd45750fd",
        "children": [],
        "additional_data": {
            "element_name": "Image 2",
            "image_desktop": "https://cdn.shopify.com/s/files/1/0772/9551/7921/files/chara_07.png?v=1759068429",
            "image_mobile": "",
            "preview_image": "https://cdn.shopify.com/s/files/1/0932/1391/7482/files/Group_5_2.png"
        },
        "style": "font-family: Inter; font-size: 16px; width: fit-content; height: unset; object-fit: cover;",
        "shop": "kurobaedo.myshopify.com",
        "id": 12052,
        "style_tablet": "",
        "style_mobile": "width: 100%; min-width: 100%;",
        "box_set_step_id": 1055469,
        "created_at": "2025-09-26T12:51:27.841Z",
        "updated_at": "2025-09-28T14:07:33.932Z",
        "translation": {}
    },
    {
        "type": "HERO_BANNER",
        "key": "890e9fab-4d52-42c7-8dd9-66c043fa7456",
        "children": [
            "45bf4485-b246-40dc-9623-568b3cfb5dec",
            "5e08c846-d731-47e3-a67e-0f01825b7851"
        ],
        "additional_data": {
            "element_name": "Hero Banner"
        },
        "style": "width: unset; font-size: 16px; font-family: Inter; display: flex; flex-direction: column; padding: 0px; position: relative; height: 200px; object-fit: cover; background: rgb(255, 255, 255); overflow: hidden; border-radius: 8px;",
        "shop": "kurobaedo.myshopify.com",
        "id": 694,
        "style_tablet": "",
        "style_mobile": "height: 300px;",
        "box_set_step_id": 1055469,
        "created_at": "2025-09-26T12:46:24.398Z",
        "updated_at": "2025-09-26T12:46:24.395Z",
        "translation": {}
    },
    {
        "type": "DUAL_IMAGE_BANNER",
        "key": "740497d9-fe29-4035-9a25-817bd313738d",
        "children": [
            "2d249e98-b74a-44e6-afc0-ac695f5b7cf5",
            "3105881f-f959-4aca-93f9-0f8f7c32b68b",
            "27c3070d-47e1-4b1d-bebf-e95bf9cd0d55",
            "aacec2f4-00c9-4bea-a3aa-ddbd157e2026",
            "945b9979-71e6-48d0-95c3-8becd45750fd"
        ],
        "additional_data": {
            "element_name": "Dual Image Banner",
            "image_layout": "side-by-side",
            "gap_size": "medium"
        },
        "style": "width: unset; height: fit-content; font-size: 16px; font-family: Inter; display: flex; flex-direction: row; padding: 0px; height: 250px; background: #FFF; overflow: hidden; position: relative; width: unset; height: fit-content; font-size: 16px; font-family: Inter; display: flex; flex-direction: row; padding: 0px; height: 250px; background: #FFF; overflow: hidden; position: relative;",
        "shop": "kurobaedo.myshopify.com",
        "id": 187,
        "style_tablet": "",
        "style_mobile": "display: flex; flex-direction: column; height: 100%; display: flex; flex-direction: column; height: 100%;",
        "box_set_step_id": 1055469,
        "created_at": "2025-09-26T12:51:27.841Z",
        "updated_at": "2025-09-28T14:07:33.932Z",
        "translation": {}
    },
    {
        "type": "STEP_BAR",
        "key": "1b51692e-5357-4070-8b1c-acd745059054",
        "children": [],
        "additional_data": {
            "element_name": "Step Bar"
        },
        "shop": "kurobaedo.myshopify.com",
        "id": 13195,
        "box_set_step_id": 1055469,
        "created_at": "2025-09-26T12:46:24.398Z",
        "updated_at": "2025-09-26T12:46:24.395Z"
    }
];
// Data từ file của bạn

// Component TreeNode
const TreeNode: React.FC<TreeNodeProps> = ({ node, dataMap, level = 0 }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(true);

    const hasChildren: boolean = node.children && node.children.length > 0;
    const elementName: string = node.additional_data?.element_name || node.type;

    // Màu sắc theo type
    const getTypeColor = (type: string): string => {
        const colors: Record<string, string> = {
            'CONTAINER_ROOT': '#3b82f6',
            'GROUP': '#8b5cf6',
            'TEXT': '#10b981',
            'HEADING': '#f59e0b',
            'IMAGE': '#ec4899',
            'HERO_BANNER': '#6366f1',
            'DUAL_IMAGE_BANNER': '#14b8a6',
            'PRODUCT_COLLECTION_LIST': '#f97316',
            'STEP_BAR': '#06b6d4'
        };
        return colors[type] || '#6b7280';
    };

    const toggleExpand = (): void => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <BlockStack reverseOrder={false} gap='200' >
                <BlockStack align='space-between' reverseOrder={false} gap={'200'}>
                    <Box padding='200' borderStyle='solid' background="bg-surface" borderRadius='200' borderColor='border-brand' borderWidth="025">
                        <InlineStack gap={'400'}>
                            <InlineStack align='start' blockAlign='center' gap={'050'}>
                                {hasChildren && (
                                    <button
                                        onClick={toggleExpand}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            padding: '2px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: '#6b7280'
                                        }}
                                    >
                                        {isExpanded ? '▼' : '▶'}
                                    </button>
                                )}

                                <b style={{
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    color: '#111827'
                                }}>{node.type[0]}</b>
                            </InlineStack>

                            <Box>
                                <div style={{
                                    fontSize: '12px',
                                    flex: 1,
                                    color: '#111827'
                                }} >
                                    {elementName}
                                </div>
                            </Box>

                        </InlineStack>
                    </Box>

                    <Box>
                        {/* Render children */}
                        {hasChildren && isExpanded && (
                            <div style={{
                                borderLeft: '2px solid #e5e7eb',
                                marginLeft: '12px',
                                paddingLeft: '0'
                            }}>
                                {node.children.map((childKey: string) => {
                                    const childNode = dataMap[childKey];
                                    if (!childNode) return null;
                                    return (
                                        <TreeNode
                                            key={childKey}
                                            node={childNode}
                                            dataMap={dataMap}
                                            level={level + 1}
                                        />
                                    );
                                })}
                            </div>
                        )}
                    </Box>
                </BlockStack>
            </BlockStack>
        </>

    );
};

// Main component - Remix Route
export default function TreeViewer(): JSX.Element {
    // Tạo map để tra cứu nhanh node theo key
    const dataMap: DataMap = {};
    dataRaw.forEach((item: NodeData) => {
        dataMap[item.key] = item;
    });

    // Tìm root node
    const rootNode: NodeData | undefined = dataRaw.find((item: NodeData) => item.type === 'CONTAINER_ROOT');

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#f9fafb',
            padding: '24px'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {/* Header */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '24px',
                    borderRadius: '12px',
                    marginBottom: '24px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}>
                    <h1 style={{
                        fontSize: '28px',
                        fontWeight: '700',
                        color: '#111827',
                        margin: '0 0 8px 0'
                    }}>
                        Tree Node Viewer
                    </h1>
                    <p style={{
                        fontSize: '14px',
                        color: '#6b7280',
                        margin: '0'
                    }}>
                        Visualize component hierarchy with expandable tree structure
                    </p>
                </div>

                {/* Tree */}
                {rootNode ? (
                    <TreeNode node={rootNode} dataMap={dataMap} />
                ) : (
                    <div style={{
                        backgroundColor: '#ffffff',
                        padding: '24px',
                        borderRadius: '8px',
                        textAlign: 'center',
                        color: '#6b7280'
                    }}>
                        No root node found
                    </div>
                )}
            </div>
        </div>
    );
}