// app/schema/pageSchema.ts
export const pageSchema = {
    "title": "Landing Page",
    "blocks": [
        { "type": "Heading", "props": { "text": "Welcome to my shop" } },
        {
            "type": "Button",
            "props": { "label": "Buy Now", "link": "/cart" },
            "events": { "onClick": { "action": "alert", "message": "Thanks for buying!" } }
        }
    ]
}
export const dataTest =
    [
        {
            "type": "CONTAINER_ROOT",
            "key": "8eaa81c5-57c8-4fd5-ad63-3bfb7eaf4ae4",
            "children": [
                "f5cbe5e2-365c-4a70-9d10-0cc0ca567a91",
                "c298905c-050b-487e-ab15-52d55fd8563f",
                "6585f099-dac8-4cd9-89e6-2c2892730f25",
                "2a7b5b51-a31f-4101-b79e-e2390e819879"
            ],
            "additional_data": {},
            "style": "width: 100%; height: fit-content; font-size: 16px; display: flex; flex-direction: column; background-color: rgba(255, 255, 255, 0);",
            "shop": "kurobaedo.myshopify.com",
            "id": 16736,
            "style_tablet": null,
            "style_mobile": "",
            "box_set_step_id": 1054558,
            "created_at": "2025-09-19T23:09:22.026Z",
            "updated_at": "2025-09-19T23:09:22.018Z"
        },
        {
            "type": "GROUP",
            "key": "4db2a818-9170-4d08-a800-6f3c9bb720d0",
            "children": [
                "c5dbaccc-c0ef-4eeb-ad7d-0f1ae799d4bf",
                "7fb98ade-c16a-496e-b990-bce0fea42a17"
            ],
            "additional_data": {
                "element_name": "Text Group"
            },
            "style": "font-family: Inter; height: fit-content; font-size: 16px; padding: 16px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: flex; flex-direction: column; justify-content: center; width: 300px; gap: 16px; object-fit: contain; align-items: center;",
            "shop": "kurobaedo.myshopify.com",
            "id": 22313,
            "style_tablet": "",
            "style_mobile": "width: 100%; min-width: 100%; gap: 16px; object-fit: contain;",
            "box_set_step_id": 1054558,
            "created_at": "2025-09-19T23:09:22.026Z",
            "updated_at": "2025-09-19T23:09:22.018Z"
        },
        {
            "type": "TEXT",
            "key": "7fb98ade-c16a-496e-b990-bce0fea42a17",
            "children": [],
            "additional_data": {
                "element_name": "Text",
                "content": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"color: rgb(255, 255, 255); white-space: pre-wrap;\">Mix and match your favorite houseplant, stylish planter, and must-have care items. </span></p>",
                "global_typography_preset": "paragraph"
            },
            "style": "font-family: Inter; width: 100%; height: fit-content; letter-spacing: normal; line-height: 1.2em; font-size: 16px; text-align: left; font-weight: 400; text-transform: none;",
            "shop": "kurobaedo.myshopify.com",
            "id": 23494,
            "style_tablet": "",
            "style_mobile": "font-size: 14px;",
            "box_set_step_id": 1054558,
            "created_at": "2025-09-19T23:09:22.026Z",
            "updated_at": "2025-09-19T23:09:22.018Z",
            "translation": null
        },
        {
            "type": "HEADING",
            "key": "c5dbaccc-c0ef-4eeb-ad7d-0f1ae799d4bf",
            "children": [],
            "additional_data": {
                "element_name": "Heading",
                "content": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"color: rgb(255, 255, 255); white-space: pre-wrap;\">Create Your Perfect Plant Combo</span></p>",
                "global_typography_preset": "h1"
            },
            "style": "font-family: Inter; width: 100%; height: fit-content; letter-spacing: normal; font-size: 48px; text-align: left; font-weight: 700; line-height: 1.2em; text-transform: none; object-fit: contain;",
            "shop": "kurobaedo.myshopify.com",
            "id": 18970,
            "style_tablet": "",
            "style_mobile": "font-size: 24px; object-fit: contain; color: rgb(177, 6, 6);",
            "box_set_step_id": 1054558,
            "created_at": "2025-09-19T23:09:22.026Z",
            "updated_at": "2025-09-19T23:09:22.018Z",
            "translation": null
        },
        {
            "type": "HEADING",
            "key": "6585f099-dac8-4cd9-89e6-2c2892730f25",
            "children": [],
            "additional_data": {
                "element_name": "Heading",
                "content": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Pick Your Green Companion 🌱</span><br></p>",
                "global_typography_preset": "custom"
            },
            "style": "font-family: \"Tenor Sans\"; width: 100%; height: fit-content; font-size: 32px; line-height: 1.2em; letter-spacing: normal; text-align: left; font-weight: 700; text-transform: none; object-fit: contain;",
            "shop": "kurobaedo.myshopify.com",
            "id": 18971,
            "style_tablet": "",
            "style_mobile": "font-family: \"Tenor Sans\"; font-size: 24px; text-align: center;",
            "box_set_step_id": 1054558,
            "created_at": "2025-09-19T23:09:22.026Z",
            "updated_at": "2025-09-19T23:09:22.018Z",
            "translation": {
                "default": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Pick Your Green Companion 🌱</span></p>"
            }
        },
        {
            "type": "PRODUCT_COLLECTION_LIST",
            "key": "2a7b5b51-a31f-4101-b79e-e2390e819879",
            "children": [],
            "additional_data": {
                "source_type": "PRODUCTS",
                "element_name": "Product List: Grid",
                "enabled_filters": false,
                "enable_search_bar": false,
                "config_name_variant": "{variantName}",
                "products": [
                    {
                        "id": "gid://shopify/Product/7713832566832",
                        "variants": [
                            {
                                "id": "gid://shopify/ProductVariant/42230675472432"
                            }
                        ]
                    },
                    {
                        "id": "gid://shopify/Product/7713786921008",
                        "variants": [
                            {
                                "id": "gid://shopify/ProductVariant/42230319644720"
                            }
                        ]
                    },
                    {
                        "id": "gid://shopify/Product/7713786822704",
                        "variants": [
                            {
                                "id": "gid://shopify/ProductVariant/42230319054896"
                            }
                        ]
                    },
                    {
                        "id": "gid://shopify/Product/7713832960048",
                        "variants": [
                            {
                                "id": "gid://shopify/ProductVariant/42230676324400"
                            }
                        ]
                    },
                    {
                        "id": "gid://shopify/Product/7713786724400",
                        "variants": [
                            {
                                "id": "gid://shopify/ProductVariant/42230318202928"
                            }
                        ]
                    },
                    {
                        "id": "gid://shopify/Product/7713786527792",
                        "variants": [
                            {
                                "id": "gid://shopify/ProductVariant/42230315253808"
                            }
                        ]
                    },
                    {
                        "id": "gid://shopify/Product/7713786757168",
                        "variants": [
                            {
                                "id": "gid://shopify/ProductVariant/42230318497840"
                            }
                        ]
                    },
                    {
                        "id": "gid://shopify/Product/7713786495024",
                        "variants": [
                            {
                                "id": "gid://shopify/ProductVariant/42230315221040"
                            }
                        ]
                    }
                ],
                "enable_display_name": true,
                "enable_display_price": true
            },
            "style": "width: 100%; height: fit-content; font-size: 16px; margin: 0px;",
            "shop": "kurobaedo.myshopify.com",
            "id": 13150,
            "style_tablet": "",
            "style_mobile": "margin: 0px; object-fit: contain;",
            "box_set_step_id": 1054558,
            "created_at": "2025-09-19T23:09:22.026Z",
            "updated_at": "2025-09-19T23:09:22.018Z"
        },
        {
            "type": "IMAGE",
            "key": "20b62226-4089-4e20-a3b2-27278cda5cc6",
            "children": [],
            "additional_data": {
                "element_name": "Image 1",
                "image_desktop": "https://cdn.shopify.com/s/files/1/0631/6657/8736/files/t_94e7c0c8-38ab-41df-a378-36d8efefe38c.webp?v=1754489559",
                "image_mobile": null,
                "preview_image": "https://cdn.shopify.com/s/files/1/0932/1391/7482/files/Group_4_2.png",
                "hiddenState": {
                    "desktop": false,
                    "mobile": true
                },
                "hidden_state": {
                    "mobile": true
                }
            },
            "style": "font-family: Inter; font-size: 16px; min-height: 200px; width: 50%; height: 250px; object-fit: cover; object-position: left center;",
            "shop": "kurobaedo.myshopify.com",
            "id": 11602,
            "style_tablet": "",
            "style_mobile": "width: 100%; min-width: 100%; height: 1%;",
            "box_set_step_id": 1054558,
            "created_at": "2025-09-19T23:09:22.026Z",
            "updated_at": "2025-09-19T23:09:22.019Z",
            "translation": null
        },
        {
            "type": "IMAGE",
            "key": "37b1b88a-72a2-4eb7-8253-cfe614156321",
            "children": [],
            "additional_data": {
                "element_name": "Image 2",
                "image_desktop": "https://cdn.shopify.com/s/files/1/0631/6657/8736/files/ff_a21dff4d-88cd-44e9-903b-837f726ea868.webp?v=1754489566",
                "image_mobile": "https://cdn.shopify.com/s/files/1/0631/6657/8736/files/ff_59d2ca63-e614-4631-bdfa-863884e5b10b.webp?v=1754489789",
                "preview_image": "https://cdn.shopify.com/s/files/1/0932/1391/7482/files/Group_5_2.png"
            },
            "style": "font-family: Inter; font-size: 16px; min-height: 200px; width: 50%; height: 250px; object-fit: cover; object-position: left center;",
            "shop": "kurobaedo.myshopify.com",
            "id": 11603,
            "style_tablet": "",
            "style_mobile": "width: 100%; min-width: 100%; height: 400px; object-position: center center; object-fit: cover;",
            "box_set_step_id": 1054558,
            "created_at": "2025-09-19T23:09:22.026Z",
            "updated_at": "2025-09-19T23:09:22.020Z",
            "translation": null
        },
        {
            "type": "DUAL_IMAGE_BANNER",
            "key": "f5cbe5e2-365c-4a70-9d10-0cc0ca567a91",
            "children": [
                "4db2a818-9170-4d08-a800-6f3c9bb720d0",
                "20b62226-4089-4e20-a3b2-27278cda5cc6",
                "37b1b88a-72a2-4eb7-8253-cfe614156321"
            ],
            "additional_data": {
                "element_name": "Dual Image Banner",
                "image_layout": "side-by-side",
                "gap_size": "medium"
            },
            "style": "width: unset; height: 250px; font-size: 16px; font-family: Inter; display: flex; flex-direction: row; padding: 0px; object-fit: cover; background: #FFF; overflow: hidden; position: relative;",
            "shop": "kurobaedo.myshopify.com",
            "id": 165,
            "style_tablet": "",
            "style_mobile": "display: flex; flex-direction: column; height: 100%;",
            "box_set_step_id": 1054558,
            "created_at": "2025-09-19T23:09:22.026Z",
            "updated_at": "2025-09-19T23:09:22.020Z",
            "translation": null
        },
        {
            "type": "STEP_BAR",
            "key": "c298905c-050b-487e-ab15-52d55fd8563f",
            "children": [],
            "additional_data": {
                "element_name": "Step Bar"
            },
            "shop": "kurobaedo.myshopify.com",
            "id": 12565,
            "box_set_step_id": 1054558,
            "created_at": "2025-09-19T23:09:22.026Z",
            "updated_at": "2025-09-19T23:09:22.020Z"
        }
    ]

const data1 = {
    "type": "DEFAULT",
    "status": false,
    "shop": "kurobaedo.myshopify.com",
    "page_url": "new-box-1",
    "additional_data": {
        "template_type": "PLANT_COMBO_MULTI_PAGE",
        "theme_settings": {
            "page_gap": 40,
            "page_padding": "10px 10px 40px",
            "settings": {
                "settings_app_add_to_box_no_variants_display": "ADDED",
                "settings_app_add_to_box_multiple_variants_type": "ADD_MORE",
                "settings_app_add_to_box_multiple_variants_display": "ADDED"
            },
            "step_bar": {
                "status": true,
                "step_name": {
                    "content_color": "rgb(0, 0, 0)"
                },
                "active_step": {
                    "hover": {
                        "border_color": "rgb(0, 0, 0)",
                        "border_width": 2,
                        "content_color": "rgb(0, 0, 0)",
                        "background_color": "rgb(255, 255, 255)"
                    },
                    "border_color": "rgb(0, 0, 0)",
                    "border_width": 2,
                    "content_color": "rgb(0, 0, 0)",
                    "background_color": "rgb(255, 255, 255)"
                },
                "completed_step": {
                    "hover": {
                        "border_color": "rgb(35, 92, 55)",
                        "border_width": 2,
                        "content_color": "rgb(255, 255, 255)",
                        "background_color": "rgb(35, 92, 55)"
                    },
                    "border_color": "rgb(61, 160, 95)",
                    "border_width": 2,
                    "content_color": "rgb(255, 255, 255)",
                    "background_color": "rgb(61, 160, 95)"
                },
                "incomplete_step": {
                    "hover": {
                        "border_color": "rgb(0, 0, 0)",
                        "border_width": 2,
                        "content_color": "rgb(0, 0, 0)",
                        "background_color": "rgb(255, 255, 255)"
                    },
                    "border_color": "rgb(241, 241, 241)",
                    "border_width": 2,
                    "content_color": "rgb(191, 191, 191)",
                    "background_color": "rgb(255, 255, 255)"
                },
                "show_step_prefix_suffix_line": false
            },
            "page_width": 1280,
            "quick_view": {
                "pills": {
                    "hover": {
                        "shadow_blur": 0,
                        "border_color": "rgb(61, 160, 95)",
                        "border_width": 1,
                        "shadow_color": "rgb(0, 0, 0)",
                        "border_radius": 32,
                        "content_color": "rgb(255, 255, 255)",
                        "background_color": "rgb(61, 160, 95)",
                        "shadow_vertical_offset": 0,
                        "shadow_horizontal_offset": 0
                    },
                    "selected": {
                        "shadow_blur": 0,
                        "border_color": "rgb(61, 160, 95)",
                        "border_width": 1,
                        "shadow_color": "rgb(0, 0, 0)",
                        "border_radius": 32,
                        "content_color": "rgb(255, 255, 255)",
                        "background_color": "rgb(61, 160, 95)",
                        "shadow_vertical_offset": 0,
                        "shadow_horizontal_offset": 0
                    },
                    "shadow_blur": 0,
                    "border_color": "rgb(224, 224, 224)",
                    "border_width": 1,
                    "shadow_color": "rgb(0, 0, 0)",
                    "border_radius": 32,
                    "content_color": "rgb(0, 0, 0)",
                    "background_color": "rgb(255, 255, 255)",
                    "shadow_vertical_offset": 0,
                    "shadow_horizontal_offset": 0
                },
                "dropdown": {
                    "hover": {
                        "shadow_blur": 0,
                        "border_color": "rgb(217, 217, 217)",
                        "border_width": 1,
                        "shadow_color": "rgb(0, 0, 0)",
                        "border_radius": 32,
                        "content_color": "rgb(0, 0, 0)",
                        "background_color": "rgb(242, 242, 242)",
                        "shadow_vertical_offset": 0,
                        "shadow_horizontal_offset": 0
                    },
                    "shadow_blur": 0,
                    "border_color": "rgb(217, 217, 217)",
                    "border_width": 1,
                    "shadow_color": "rgb(0, 0, 0)",
                    "border_radius": 32,
                    "content_color": "rgb(0, 0, 0)",
                    "background_color": "rgb(255, 255, 255)",
                    "shadow_vertical_offset": 0,
                    "shadow_horizontal_offset": 0
                },
                "variant_style": "pills",
                "variant_swatch": "circle",
                "add_to_box_button": {
                    "hover": {
                        "shadow_blur": 0,
                        "border_color": "rgb(61, 160, 95)",
                        "border_width": 0,
                        "shadow_color": "rgb(0, 0, 0)",
                        "border_radius": 32,
                        "content_color": "rgb(255, 255, 255)",
                        "background_color": "rgb(45, 118, 70)",
                        "shadow_vertical_offset": 0,
                        "shadow_horizontal_offset": 0
                    },
                    "disabled": {
                        "shadow_blur": 0,
                        "border_color": "rgb(224, 224, 224)",
                        "border_width": 0,
                        "shadow_color": "rgb(0, 0, 0)",
                        "border_radius": 32,
                        "content_color": "rgb(255, 255, 255)",
                        "background_color": "#3da05f",
                        "shadow_vertical_offset": 0,
                        "shadow_horizontal_offset": 0
                    },
                    "selected": {
                        "shadow_blur": 0,
                        "border_color": "rgb(61, 160, 95)",
                        "border_width": 2,
                        "shadow_color": "rgb(0, 0, 0)",
                        "border_radius": 32,
                        "content_color": "rgb(255, 255, 255)",
                        "background_color": "rgb(61, 160, 95)",
                        "shadow_vertical_offset": 0,
                        "shadow_horizontal_offset": 0
                    },
                    "shadow_blur": 0,
                    "border_color": "rgb(61, 160, 95)",
                    "border_width": 0,
                    "shadow_color": "rgb(0, 0, 0)",
                    "border_radius": 32,
                    "content_color": "rgb(255, 255, 255)",
                    "background_color": "rgb(61, 160, 95)",
                    "shadow_vertical_offset": 0,
                    "shadow_horizontal_offset": 0
                }
            },
            "product_card": {
                "shadow_blur": 0,
                "view_button": {
                    "hover": {
                        "shadow_blur": 0,
                        "border_color": "rgb(0, 0, 0)",
                        "border_width": 0,
                        "shadow_color": "rgb(0, 0, 0)",
                        "border_radius": 32,
                        "content_color": "rgb(255, 255, 255)",
                        "background_color": "rgb(61, 160, 95)",
                        "shadow_vertical_offset": 0,
                        "shadow_horizontal_offset": 0
                    },
                    "shadow_blur": 0,
                    "border_color": "rgb(0, 0, 0)",
                    "border_width": 0,
                    "shadow_color": "rgb(0, 0, 0)",
                    "border_radius": 32,
                    "content_color": "rgb(0, 0, 0)",
                    "background_color": "rgb(255, 255, 255)",
                    "shadow_vertical_offset": 0,
                    "shadow_horizontal_offset": 0
                },
                "border_color": "rgb(0, 0, 0)",
                "border_width": 0,
                "shadow_color": "rgb(0, 0, 0)",
                "border_radius": 0,
                "content_color": "rgb(0, 0, 0)",
                "image_padding": 0,
                "text_alignment": "center",
                "add_to_box_button": {
                    "hover": {
                        "shadow_blur": 0,
                        "border_color": "rgb(61, 160, 95)",
                        "border_width": 0,
                        "shadow_color": "rgb(61, 160, 95)",
                        "border_radius": 32,
                        "content_color": "rgb(255, 255, 255)",
                        "background_color": "rgb(61, 160, 95)",
                        "shadow_vertical_offset": 0,
                        "shadow_horizontal_offset": 0
                    },
                    "disabled": {
                        "shadow_blur": 0,
                        "border_color": "rgb(224, 224, 224)",
                        "border_width": 0,
                        "shadow_color": "rgb(0, 0, 0)",
                        "border_radius": 32,
                        "content_color": "rgb(166, 166, 166)",
                        "background_color": "rgb(242, 242, 242)",
                        "shadow_vertical_offset": 0,
                        "shadow_horizontal_offset": 0
                    },
                    "shadow_blur": 0,
                    "border_color": "rgb(0, 0, 0)",
                    "border_width": 0,
                    "shadow_color": "rgb(0, 0, 0)",
                    "border_radius": 32,
                    "content_color": "rgb(0, 0, 0)",
                    "background_color": "rgb(255, 255, 255)",
                    "shadow_vertical_offset": 0,
                    "shadow_horizontal_offset": 0
                },
                "added_button": {
                    "hover": {
                        "shadow_blur": 0,
                        "border_color": "rgb(61, 160, 95)",
                        "border_width": 1,
                        "shadow_color": "rgb(61, 160, 95)",
                        "border_radius": 32,
                        "content_color": "rgb(255, 255, 255)",
                        "background_color": "rgb(61, 160, 95)",
                        "shadow_vertical_offset": 0,
                        "shadow_horizontal_offset": 0
                    },
                    "shadow_blur": 0,
                    "border_color": "rgb(213, 213, 213)",
                    "border_width": "1",
                    "shadow_color": "rgb(0, 0, 0)",
                    "border_radius": 32,
                    "content_color": "rgb(0, 0, 0)",
                    "background_color": "rgb(255, 255, 255)",
                    "shadow_vertical_offset": 0,
                    "shadow_horizontal_offset": 0
                },
                "add_another_button": {
                    "hover": {
                        "shadow_blur": 0,
                        "border_color": "rgb(51, 126, 76)",
                        "border_width": "1",
                        "shadow_color": "rgb(51, 126, 76)",
                        "border_radius": 32,
                        "content_color": "rgb(255, 255, 255)",
                        "background_color": "rgb(51, 126, 76)",
                        "shadow_vertical_offset": 0,
                        "shadow_horizontal_offset": 0
                    },
                    "shadow_blur": 0,
                    "border_color": "rgb(61, 160, 95)",
                    "border_width": "1",
                    "shadow_color": "rgb(0, 0, 0)",
                    "border_radius": 32,
                    "content_color": "rgb(255, 255, 255)",
                    "background_color": "rgb(61, 160, 95)",
                    "shadow_vertical_offset": 0,
                    "shadow_horizontal_offset": 0
                },
                "edit_options_button": {
                    "hover": {
                        "shadow_blur": 0,
                        "border_color": "rgb(51, 126, 76)",
                        "border_width": "1",
                        "shadow_color": "rgb(51, 126, 76)",
                        "border_radius": 32,
                        "content_color": "rgb(255, 255, 255)",
                        "background_color": "rgb(51, 126, 76)",
                        "shadow_vertical_offset": 0,
                        "shadow_horizontal_offset": 0
                    },
                    "shadow_blur": 0,
                    "border_color": "rgb(61, 160, 95)",
                    "border_width": "1",
                    "shadow_color": "rgb(61, 160, 95))",
                    "border_radius": 32,
                    "content_color": "rgb(255, 255, 255)",
                    "background_color": "rgb(61, 160, 95)",
                    "shadow_vertical_offset": 0,
                    "shadow_horizontal_offset": 0
                },
                "shadow_vertical_offset": 0,
                "shadow_horizontal_offset": 0,
                "enable_display_name": true,
                "enable_display_price": true,
                "quantity_selector": {
                    "content_color": "rgba(0, 0, 0, 1)",
                    "background_color": "rgba(255, 255, 255, 1)",
                    "border_color": "rgb(240, 243, 245)",
                    "border_width": 1,
                    "border_radius": "160",
                    "hover": {
                        "content_color": "rgb(0, 0, 0)",
                        "background_color": "rgb(240, 243, 245)"
                    }
                }
            },
            "global_colors": {
                "color": "rgb(48, 48, 48)",
                "background_color": "rgba(0, 0, 0, 0)"
            },
            "quick_summary": {
                "button_back": {
                    "hover": {
                        "shadow_blur": 0,
                        "border_color": "rgba(0, 0, 0, 0)",
                        "border_width": 1,
                        "shadow_color": "rgba(0, 0, 0, 0)",
                        "border_radius": "32",
                        "content_color": "rgb(255, 255, 255)",
                        "background_color": "rgb(61, 160, 95)",
                        "shadow_vertical_offset": "0",
                        "shadow_horizontal_offset": "0"
                    },
                    "shadow_blur": 0,
                    "border_color": "#e0e0e0ff",
                    "border_width": 1,
                    "shadow_color": "rgba(0, 0, 0, 0)",
                    "border_radius": "32",
                    "content_color": "rgb(0, 0, 0)",
                    "background_color": "rgb(255, 255, 255)",
                    "shadow_vertical_offset": "0",
                    "shadow_horizontal_offset": "0"
                },
                "button_next": {
                    "hover": {
                        "shadow_blur": 0,
                        "border_color": "rgba(0, 0, 0, 0)",
                        "border_width": 1,
                        "shadow_color": "rgba(0, 0, 0, 0)",
                        "border_radius": "32",
                        "content_color": "rgb(255, 255, 255)",
                        "background_color": "rgb(45, 118, 70)",
                        "shadow_vertical_offset": "0",
                        "shadow_horizontal_offset": "0"
                    },
                    "shadow_blur": 0,
                    "border_color": "rgba(0, 0, 0, 0)",
                    "border_width": 1,
                    "shadow_color": "rgba(0, 0, 0, 0)",
                    "border_radius": "32",
                    "content_color": "rgb(255, 255, 255)",
                    "background_color": "rgb(61, 160, 95)",
                    "shadow_vertical_offset": "0",
                    "shadow_horizontal_offset": "0"
                },
                "position": "SIDEBAR",
                "quickSummaryWhenToShow": "AFTER_SELECT_PRODUCT",
                "show_total": 1,
                "show_discount": 1,
                "show_messages": 1,
                "show_subtotal": 1,
                "show_clear_all": 1,
                "show_delete_btn": 1,
                "show_total_items": 1,
                "show_product_name": 1,
                "show_qty_selector": 1,
                "show_variant_name": 1,
                "show_product_price": 1,
                "show_add_on_product_price": 1,
                "show_added_quantity": 1,
                "divider_color": "rgb(230 230 230)",
                "content_background_color": "rgb(255, 255, 255)",
                "heading_background_color": "rgb(247, 247, 247)",
                "header_content_color": "rgb(0, 0, 0)",
                "header_background_color": "rgb(242 242 242)",
                "subcontent_color": "rgb(0, 0, 0)",
                "subcontent_background_color": "rgb(255, 255, 255)"
            },
            "box_review_page": {
                "status": 1,
                "redirect": "/checkout",
                "create_new_box_button": {
                    "hover": {
                        "shadow_blur": 0,
                        "border_color": "rgba(0, 0, 0, 0)",
                        "border_width": 1,
                        "shadow_color": "rgba(0, 0, 0, 0)",
                        "border_radius": "32",
                        "content_color": "rgb(255, 255, 255)",
                        "background_color": "rgb(61, 160, 95)",
                        "shadow_vertical_offset": "0",
                        "shadow_horizontal_offset": "0"
                    },
                    "shadow_blur": 0,
                    "border_color": "#e0e0e0ff",
                    "border_width": 1,
                    "shadow_color": "rgba(0, 0, 0, 0)",
                    "border_radius": "32",
                    "content_color": "rgb(0, 0, 0)",
                    "background_color": "rgb(255, 255, 255)",
                    "shadow_vertical_offset": "0",
                    "shadow_horizontal_offset": "0"
                },
                "checkout_button": {
                    "hover": {
                        "shadow_blur": 0,
                        "border_color": "rgba(0, 0, 0, 0)",
                        "border_width": 1,
                        "shadow_color": "rgba(0, 0, 0, 0)",
                        "border_radius": "32",
                        "content_color": "rgb(255, 255, 255)",
                        "background_color": "rgb(45, 118, 70)",
                        "shadow_vertical_offset": "0",
                        "shadow_horizontal_offset": "0"
                    },
                    "shadow_blur": 0,
                    "border_color": "rgba(0, 0, 0, 0)",
                    "border_width": 1,
                    "shadow_color": "rgba(0, 0, 0, 0)",
                    "border_radius": "32",
                    "content_color": "rgb(255, 255, 255)",
                    "background_color": "rgb(61, 160, 95)",
                    "shadow_vertical_offset": "0",
                    "shadow_horizontal_offset": "0"
                }
            },
            "global_typography": {
                "h1": {
                    "font-size": "40px",
                    "text-align": "center",
                    "font-family": "Tenor Sans",
                    "font-weight": "700",
                    "line-height": "1.2em",
                    "letter-spacing": "0em",
                    "text-transform": "none"
                },
                "h2": {
                    "font-size": "32px",
                    "text-align": "left",
                    "font-family": "Tenor Sans",
                    "font-weight": "700",
                    "line-height": "1.2em",
                    "letter-spacing": "normal",
                    "text-transform": "none"
                },
                "h3": {
                    "font-size": "24px",
                    "text-align": "left",
                    "font-family": "Tenor Sans",
                    "font-weight": "700",
                    "line-height": "1.2em",
                    "letter-spacing": "normal",
                    "text-transform": "none"
                },
                "h4": {
                    "font-size": "24px",
                    "text-align": "left",
                    "font-family": "Merriweather Sans",
                    "font-weight": "700",
                    "line-height": "normal",
                    "letter-spacing": "normal",
                    "text-transform": "none"
                },
                "h5": {
                    "font-size": "14px",
                    "text-align": "left",
                    "font-family": "Merriweather Sans",
                    "font-weight": "700",
                    "line-height": "1.2em",
                    "letter-spacing": "normal",
                    "text-transform": "none"
                },
                "h6": {
                    "font-size": "12px",
                    "text-align": "left",
                    "font-family": "Merriweather Sans",
                    "font-weight": "700",
                    "line-height": "1.2em",
                    "letter-spacing": "normal",
                    "text-transform": "none"
                },
                "paragraph": {
                    "font-size": "16px",
                    "text-align": "center",
                    "font-family": "Public Sans",
                    "font-weight": "400",
                    "line-height": "1em",
                    "letter-spacing": "0em",
                    "text-transform": "none"
                },
                "custom": {
                    "font-family": "Public Sans"
                }
            },
            "global_css_js": {
                "css": "",
                "js": ""
            }
        },
        "include_add_on_in_total": false,
        "layout_type": "DEFAULT",
        "preview_url": "https://easify-box-builder-app.myshopify.com/apps/box-builder/plant-combo-multi-page"
    },
    "id": 2434,
    "name": "New Box",
    "icon": "",
    "created_at": "2025-09-19T23:09:22.010Z",
    "updated_at": "2025-09-19T23:09:22.007Z",
    "translation": {
        "default": "New Box"
    },
    "box_set_discount": {
        "id": 1183,
        "type": "FIXED_AMOUNT_OFF",
        "additional_data": {},
        "box_set_id": 2434,
        "status": false,
        "created_at": "2025-09-19T23:09:22.051Z",
        "updated_at": "2025-09-19T23:09:22.050Z",
        "translation": {
            "default": {
                "success_message": "🎊You’ve unlocked a special deal! 🎊"
            }
        },
        "box_set_discount_rules": [
            {
                "id": 1618,
                "code": "code",
                "position": 0,
                "additional_data": {
                    "discount_on": "QUANTITY",
                    "minimum_value": "0",
                    "discount_value": "0",
                    "position": 0
                },
                "box_set_discount_id": 1183,
                "created_at": "2025-09-19T23:09:22.053Z",
                "updated_at": "2025-09-19T23:09:22.052Z",
                "translation": {
                    "default": {
                        "message": "Add {discountConditionDiff} more item(s) to get {discountValue} off!"
                    }
                }
            }
        ]
    },
    "box_set_fixed_quantity_discount": null,
    "box_set_step": [
        {
            "id": 1054558,
            "name": "",
            "key": "6598e2c4-f800-466f-bb1e-22de315767de",
            "description": null,
            "status": true,
            "position": 0,
            "icon": null,
            "conditions": null,
            "product_list_type": "PRODUCTS",
            "additional_data": {},
            "hide_step_bar": false,
            "step_title": "Select Your Houseplant",
            "box_set_id": 2434,
            "created_at": "2025-09-19T23:09:22.015Z",
            "updated_at": "2025-09-19T23:09:22.013Z",
            "is_box_review": false,
            "is_size_discount_selector": false,
            "translation": {
                "default": "Select Your Houseplant"
            },
            "elements": [
                {
                    "type": "CONTAINER_ROOT",
                    "key": "8eaa81c5-57c8-4fd5-ad63-3bfb7eaf4ae4",
                    "children": [
                        "f5cbe5e2-365c-4a70-9d10-0cc0ca567a91",
                        "c298905c-050b-487e-ab15-52d55fd8563f",
                        "6585f099-dac8-4cd9-89e6-2c2892730f25",
                        "2a7b5b51-a31f-4101-b79e-e2390e819879"
                    ],
                    "additional_data": {},
                    "style": "width: 100%; height: fit-content; font-size: 16px; display: flex; flex-direction: column; background-color: rgba(255, 255, 255, 0);",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 16736,
                    "style_tablet": null,
                    "style_mobile": "",
                    "box_set_step_id": 1054558,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.018Z"
                },
                {
                    "type": "GROUP",
                    "key": "4db2a818-9170-4d08-a800-6f3c9bb720d0",
                    "children": [
                        "c5dbaccc-c0ef-4eeb-ad7d-0f1ae799d4bf",
                        "7fb98ade-c16a-496e-b990-bce0fea42a17"
                    ],
                    "additional_data": {
                        "element_name": "Text Group"
                    },
                    "style": "font-family: Inter; height: fit-content; font-size: 16px; padding: 16px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: flex; flex-direction: column; justify-content: center; width: 300px; gap: 16px; object-fit: contain; align-items: center;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 22313,
                    "style_tablet": "",
                    "style_mobile": "width: 100%; min-width: 100%; gap: 16px; object-fit: contain;",
                    "box_set_step_id": 1054558,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.018Z"
                },
                {
                    "type": "TEXT",
                    "key": "7fb98ade-c16a-496e-b990-bce0fea42a17",
                    "children": [],
                    "additional_data": {
                        "element_name": "Text",
                        "content": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"color: rgb(255, 255, 255); white-space: pre-wrap;\">Mix and match your favorite houseplant, stylish planter, and must-have care items. </span></p>",
                        "global_typography_preset": "paragraph"
                    },
                    "style": "font-family: Inter; width: 100%; height: fit-content; letter-spacing: normal; line-height: 1.2em; font-size: 16px; text-align: left; font-weight: 400; text-transform: none;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 23494,
                    "style_tablet": "",
                    "style_mobile": "font-size: 14px;",
                    "box_set_step_id": 1054558,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.018Z",
                    "translation": null
                },
                {
                    "type": "HEADING",
                    "key": "c5dbaccc-c0ef-4eeb-ad7d-0f1ae799d4bf",
                    "children": [],
                    "additional_data": {
                        "element_name": "Heading",
                        "content": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"color: rgb(255, 255, 255); white-space: pre-wrap;\">Create Your Perfect Plant Combo</span></p>",
                        "global_typography_preset": "h1"
                    },
                    "style": "font-family: Inter; width: 100%; height: fit-content; letter-spacing: normal; font-size: 48px; text-align: left; font-weight: 700; line-height: 1.2em; text-transform: none; object-fit: contain;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 18970,
                    "style_tablet": "",
                    "style_mobile": "font-size: 24px; object-fit: contain; color: rgb(177, 6, 6);",
                    "box_set_step_id": 1054558,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.018Z",
                    "translation": null
                },
                {
                    "type": "HEADING",
                    "key": "6585f099-dac8-4cd9-89e6-2c2892730f25",
                    "children": [],
                    "additional_data": {
                        "element_name": "Heading",
                        "content": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Pick Your Green Companion 🌱</span><br></p>",
                        "global_typography_preset": "custom"
                    },
                    "style": "font-family: \"Tenor Sans\"; width: 100%; height: fit-content; font-size: 32px; line-height: 1.2em; letter-spacing: normal; text-align: left; font-weight: 700; text-transform: none; object-fit: contain;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 18971,
                    "style_tablet": "",
                    "style_mobile": "font-family: \"Tenor Sans\"; font-size: 24px; text-align: center;",
                    "box_set_step_id": 1054558,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.018Z",
                    "translation": {
                        "default": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Pick Your Green Companion 🌱</span></p>"
                    }
                },
                {
                    "type": "PRODUCT_COLLECTION_LIST",
                    "key": "2a7b5b51-a31f-4101-b79e-e2390e819879",
                    "children": [],
                    "additional_data": {
                        "source_type": "PRODUCTS",
                        "element_name": "Product List: Grid",
                        "enabled_filters": false,
                        "enable_search_bar": false,
                        "config_name_variant": "{variantName}",
                        "products": [
                            {
                                "id": "gid://shopify/Product/7713832566832",
                                "variants": [
                                    {
                                        "id": "gid://shopify/ProductVariant/42230675472432"
                                    }
                                ]
                            },
                            {
                                "id": "gid://shopify/Product/7713786921008",
                                "variants": [
                                    {
                                        "id": "gid://shopify/ProductVariant/42230319644720"
                                    }
                                ]
                            },
                            {
                                "id": "gid://shopify/Product/7713786822704",
                                "variants": [
                                    {
                                        "id": "gid://shopify/ProductVariant/42230319054896"
                                    }
                                ]
                            },
                            {
                                "id": "gid://shopify/Product/7713832960048",
                                "variants": [
                                    {
                                        "id": "gid://shopify/ProductVariant/42230676324400"
                                    }
                                ]
                            },
                            {
                                "id": "gid://shopify/Product/7713786724400",
                                "variants": [
                                    {
                                        "id": "gid://shopify/ProductVariant/42230318202928"
                                    }
                                ]
                            },
                            {
                                "id": "gid://shopify/Product/7713786527792",
                                "variants": [
                                    {
                                        "id": "gid://shopify/ProductVariant/42230315253808"
                                    }
                                ]
                            },
                            {
                                "id": "gid://shopify/Product/7713786757168",
                                "variants": [
                                    {
                                        "id": "gid://shopify/ProductVariant/42230318497840"
                                    }
                                ]
                            },
                            {
                                "id": "gid://shopify/Product/7713786495024",
                                "variants": [
                                    {
                                        "id": "gid://shopify/ProductVariant/42230315221040"
                                    }
                                ]
                            }
                        ],
                        "enable_display_name": true,
                        "enable_display_price": true
                    },
                    "style": "width: 100%; height: fit-content; font-size: 16px; margin: 0px;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 13150,
                    "style_tablet": "",
                    "style_mobile": "margin: 0px; object-fit: contain;",
                    "box_set_step_id": 1054558,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.018Z"
                },
                {
                    "type": "IMAGE",
                    "key": "20b62226-4089-4e20-a3b2-27278cda5cc6",
                    "children": [],
                    "additional_data": {
                        "element_name": "Image 1",
                        "image_desktop": "https://cdn.shopify.com/s/files/1/0631/6657/8736/files/t_94e7c0c8-38ab-41df-a378-36d8efefe38c.webp?v=1754489559",
                        "image_mobile": null,
                        "preview_image": "https://cdn.shopify.com/s/files/1/0932/1391/7482/files/Group_4_2.png",
                        "hiddenState": {
                            "desktop": false,
                            "mobile": true
                        },
                        "hidden_state": {
                            "mobile": true
                        }
                    },
                    "style": "font-family: Inter; font-size: 16px; min-height: 200px; width: 50%; height: 250px; object-fit: cover; object-position: left center;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 11602,
                    "style_tablet": "",
                    "style_mobile": "width: 100%; min-width: 100%; height: 1%;",
                    "box_set_step_id": 1054558,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.019Z",
                    "translation": null
                },
                {
                    "type": "IMAGE",
                    "key": "37b1b88a-72a2-4eb7-8253-cfe614156321",
                    "children": [],
                    "additional_data": {
                        "element_name": "Image 2",
                        "image_desktop": "https://cdn.shopify.com/s/files/1/0631/6657/8736/files/ff_a21dff4d-88cd-44e9-903b-837f726ea868.webp?v=1754489566",
                        "image_mobile": "https://cdn.shopify.com/s/files/1/0631/6657/8736/files/ff_59d2ca63-e614-4631-bdfa-863884e5b10b.webp?v=1754489789",
                        "preview_image": "https://cdn.shopify.com/s/files/1/0932/1391/7482/files/Group_5_2.png"
                    },
                    "style": "font-family: Inter; font-size: 16px; min-height: 200px; width: 50%; height: 250px; object-fit: cover; object-position: left center;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 11603,
                    "style_tablet": "",
                    "style_mobile": "width: 100%; min-width: 100%; height: 400px; object-position: center center; object-fit: cover;",
                    "box_set_step_id": 1054558,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.020Z",
                    "translation": null
                },
                {
                    "type": "DUAL_IMAGE_BANNER",
                    "key": "f5cbe5e2-365c-4a70-9d10-0cc0ca567a91",
                    "children": [
                        "4db2a818-9170-4d08-a800-6f3c9bb720d0",
                        "20b62226-4089-4e20-a3b2-27278cda5cc6",
                        "37b1b88a-72a2-4eb7-8253-cfe614156321"
                    ],
                    "additional_data": {
                        "element_name": "Dual Image Banner",
                        "image_layout": "side-by-side",
                        "gap_size": "medium"
                    },
                    "style": "width: unset; height: 250px; font-size: 16px; font-family: Inter; display: flex; flex-direction: row; padding: 0px; object-fit: cover; background: #FFF; overflow: hidden; position: relative;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 165,
                    "style_tablet": "",
                    "style_mobile": "display: flex; flex-direction: column; height: 100%;",
                    "box_set_step_id": 1054558,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.020Z",
                    "translation": null
                },
                {
                    "type": "STEP_BAR",
                    "key": "c298905c-050b-487e-ab15-52d55fd8563f",
                    "children": [],
                    "additional_data": {
                        "element_name": "Step Bar"
                    },
                    "shop": "kurobaedo.myshopify.com",
                    "id": 12565,
                    "box_set_step_id": 1054558,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.020Z"
                }
            ]
        },
        {
            "id": 1054559,
            "name": "",
            "key": "c723baa2-c815-47de-9bad-37cb625e6c16",
            "description": null,
            "status": true,
            "position": 1,
            "icon": null,
            "conditions": null,
            "product_list_type": "PRODUCTS",
            "additional_data": {},
            "hide_step_bar": false,
            "step_title": "Choose a Planter",
            "box_set_id": 2434,
            "created_at": "2025-09-19T23:09:22.015Z",
            "updated_at": "2025-09-19T23:09:22.013Z",
            "is_box_review": false,
            "is_size_discount_selector": false,
            "translation": {
                "default": "Choose a Planter"
            },
            "elements": [
                {
                    "type": "CONTAINER_ROOT",
                    "key": "90136778-a92e-4822-ab3e-74fbc051cf9b",
                    "children": [
                        "30dd1eff-4ba0-4da1-a2d6-eae24d154515",
                        "a99a5945-d9a4-4580-9493-1f7eaa78a54d",
                        "f1ad4238-4bd0-4c91-9160-7c2238da5034",
                        "d72ae5a6-f3af-4c95-86a2-47c029af4951"
                    ],
                    "additional_data": {},
                    "style": "width: 100%; height: fit-content; font-size: 16px; display: flex; flex-direction: column; background-color: rgba(255, 255, 255, 0);",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 16737,
                    "style_tablet": null,
                    "style_mobile": "",
                    "box_set_step_id": 1054559,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.020Z"
                },
                {
                    "type": "GROUP",
                    "key": "e81b0728-0dff-4ca5-952e-0d5797294756",
                    "children": [
                        "dd675cc0-0949-4253-833f-4df29369246d",
                        "6c63b700-b97f-4580-89ce-caaa097d1bcb"
                    ],
                    "additional_data": {
                        "element_name": "Text Group"
                    },
                    "style": "font-family: Inter; height: fit-content; font-size: 16px; padding: 16px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: flex; flex-direction: column; justify-content: center; width: 300px; gap: 16px; object-fit: contain; align-items: center;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 22314,
                    "style_tablet": "",
                    "style_mobile": "width: 100%; min-width: 100%; gap: 16px;",
                    "box_set_step_id": 1054559,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.020Z"
                },
                {
                    "type": "TEXT",
                    "key": "6c63b700-b97f-4580-89ce-caaa097d1bcb",
                    "children": [],
                    "additional_data": {
                        "element_name": "Text",
                        "content": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"color: rgb(255, 255, 255); white-space: pre-wrap;\">Mix and match your favorite houseplant, stylish planter, and must-have care items. </span></p>",
                        "global_typography_preset": "paragraph"
                    },
                    "style": "width: 100%; height: fit-content; font-size: 16px; font-family: Inter; letter-spacing: 0em; text-align: center; line-height: 1.1em; font-weight: 500;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 23495,
                    "style_tablet": "",
                    "style_mobile": "font-size: 16px; font-weight: 400; font-family: Inter; line-height: 1.2em; letter-spacing: normal; text-align: left; text-transform: none;",
                    "box_set_step_id": 1054559,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.020Z",
                    "translation": null
                },
                {
                    "type": "HEADING",
                    "key": "dd675cc0-0949-4253-833f-4df29369246d",
                    "children": [],
                    "additional_data": {
                        "element_name": "Heading",
                        "content": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"color: rgb(255, 255, 255); white-space: pre-wrap;\">Create Your Perfect Plant Combo</span></p>",
                        "global_typography_preset": "h1"
                    },
                    "style": "font-family: Inter; width: 100%; height: fit-content; letter-spacing: normal; font-size: 48px; text-align: left; font-weight: 700; line-height: 1.2em; text-transform: none;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 18972,
                    "style_tablet": "",
                    "style_mobile": "font-size: 24px;",
                    "box_set_step_id": 1054559,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.020Z",
                    "translation": null
                },
                {
                    "type": "HEADING",
                    "key": "f1ad4238-4bd0-4c91-9160-7c2238da5034",
                    "children": [],
                    "additional_data": {
                        "element_name": "Heading",
                        "content": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Find the Perfect Home for It\n</span></p>",
                        "global_typography_preset": "custom"
                    },
                    "style": "font-family: \"Tenor Sans\"; width: 100%; height: fit-content; font-size: 32px; line-height: 1.2em; letter-spacing: normal; text-align: left; font-weight: 700; text-transform: none;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 18973,
                    "style_tablet": "",
                    "style_mobile": "font-family: \"Tenor Sans\"; font-size: 24px; text-align: center;",
                    "box_set_step_id": 1054559,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.020Z",
                    "translation": {
                        "default": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Find the Perfect Home for It 🪴</span></p>"
                    }
                },
                {
                    "type": "PRODUCT_COLLECTION_LIST",
                    "key": "d72ae5a6-f3af-4c95-86a2-47c029af4951",
                    "children": [],
                    "additional_data": {
                        "source_type": "PRODUCTS",
                        "element_name": "Product List: Grid",
                        "enabled_filters": false,
                        "enable_search_bar": false,
                        "config_name_variant": "{variantName}",
                        "products": [
                            {
                                "id": "gid://shopify/Product/7715805921328",
                                "variants": [
                                    {
                                        "id": "gid://shopify/ProductVariant/42236673949744"
                                    }
                                ]
                            },
                            {
                                "id": "gid://shopify/Product/7715805888560",
                                "variants": [
                                    {
                                        "id": "gid://shopify/ProductVariant/42236673916976"
                                    }
                                ]
                            },
                            {
                                "id": "gid://shopify/Product/7713789083696",
                                "variants": [
                                    {
                                        "id": "gid://shopify/ProductVariant/42230330753072"
                                    },
                                    {
                                        "id": "gid://shopify/ProductVariant/42230330785840"
                                    }
                                ]
                            },
                            {
                                "id": "gid://shopify/Product/7713789182000",
                                "variants": [
                                    {
                                        "id": "gid://shopify/ProductVariant/42230332031024"
                                    },
                                    {
                                        "id": "gid://shopify/ProductVariant/42230332063792"
                                    }
                                ]
                            },
                            {
                                "id": "gid://shopify/Product/7713788821552",
                                "variants": [
                                    {
                                        "id": "gid://shopify/ProductVariant/42230328885296"
                                    },
                                    {
                                        "id": "gid://shopify/ProductVariant/42230328918064"
                                    }
                                ]
                            },
                            {
                                "id": "gid://shopify/Product/7713789444144",
                                "variants": [
                                    {
                                        "id": "gid://shopify/ProductVariant/42230336323632"
                                    },
                                    {
                                        "id": "gid://shopify/ProductVariant/42230336356400"
                                    }
                                ]
                            },
                            {
                                "id": "gid://shopify/Product/7713789313072",
                                "variants": [
                                    {
                                        "id": "gid://shopify/ProductVariant/42230333898800"
                                    }
                                ]
                            },
                            {
                                "id": "gid://shopify/Product/7713788657712",
                                "variants": [
                                    {
                                        "id": "gid://shopify/ProductVariant/42230328655920"
                                    },
                                    {
                                        "id": "gid://shopify/ProductVariant/42230328688688"
                                    }
                                ]
                            }
                        ],
                        "enable_display_name": true,
                        "enable_display_price": true,
                        "enable_quick_view": false
                    },
                    "style": "width: 100%; height: fit-content; font-size: 16px; margin: 0px;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 13151,
                    "style_tablet": "",
                    "style_mobile": "margin: 0px;",
                    "box_set_step_id": 1054559,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.020Z"
                },
                {
                    "type": "IMAGE",
                    "key": "3b106fad-ace1-4f13-8fbd-7791f9dfe1d0",
                    "children": [],
                    "additional_data": {
                        "element_name": "Image 1",
                        "image_desktop": "https://cdn.shopify.com/s/files/1/0631/6657/8736/files/t_e127e80c-d5aa-4b09-bbaa-2993e54730d5.webp?v=1754490425",
                        "image_mobile": "",
                        "preview_image": "https://cdn.shopify.com/s/files/1/0932/1391/7482/files/Group_4_2.png",
                        "hiddenState": {
                            "mobile": true
                        },
                        "hidden_state": {
                            "mobile": true
                        }
                    },
                    "style": "width: 50%; height: unset; font-size: 16px; font-family: Inter; min-height: 200px; object-fit: cover;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 11604,
                    "style_tablet": "",
                    "style_mobile": "width: 100%; min-width: 100%;",
                    "box_set_step_id": 1054559,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.020Z",
                    "translation": null
                },
                {
                    "type": "IMAGE",
                    "key": "998e47b2-5ce5-41ab-a349-f78c5967842e",
                    "children": [],
                    "additional_data": {
                        "element_name": "Image 2",
                        "image_desktop": "https://cdn.shopify.com/s/files/1/0631/6657/8736/files/ff_dc1c53e9-f623-433b-ba28-c73039709d60.webp?v=1754490442",
                        "image_mobile": "https://cdn.shopify.com/s/files/1/0631/6657/8736/files/ff_6506a668-8413-4b9b-89e4-8366d424df93.webp?v=1754804408",
                        "preview_image": "https://cdn.shopify.com/s/files/1/0932/1391/7482/files/Group_5_2.png"
                    },
                    "style": "width: 50%; height: unset; font-size: 16px; font-family: Inter; min-height: 200px; object-fit: cover;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 11605,
                    "style_tablet": "",
                    "style_mobile": "width: 100%; min-width: 100%; object-fit: cover; height: 400px;",
                    "box_set_step_id": 1054559,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.020Z",
                    "translation": null
                },
                {
                    "type": "DUAL_IMAGE_BANNER",
                    "key": "30dd1eff-4ba0-4da1-a2d6-eae24d154515",
                    "children": [
                        "e81b0728-0dff-4ca5-952e-0d5797294756",
                        "3b106fad-ace1-4f13-8fbd-7791f9dfe1d0",
                        "998e47b2-5ce5-41ab-a349-f78c5967842e"
                    ],
                    "additional_data": {
                        "element_name": "Dual Image Banner",
                        "image_layout": "side-by-side",
                        "gap_size": "medium",
                        "isHidden": true,
                        "hiddenState": {
                            "mobile": true,
                            "desktop": true
                        },
                        "hidden_state": {
                            "mobile": true
                        }
                    },
                    "style": "width: unset; height: 250px; font-size: 16px; font-family: Inter; display: flex; flex-direction: row; padding: 0px; object-fit: cover; background: #FFF; overflow: hidden; position: relative;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 166,
                    "style_tablet": "",
                    "style_mobile": "display: flex; flex-direction: column; height: 100%;",
                    "box_set_step_id": 1054559,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.020Z",
                    "translation": null
                },
                {
                    "type": "STEP_BAR",
                    "key": "a99a5945-d9a4-4580-9493-1f7eaa78a54d",
                    "children": [],
                    "additional_data": {
                        "element_name": "Step Bar"
                    },
                    "shop": "kurobaedo.myshopify.com",
                    "id": 12566,
                    "box_set_step_id": 1054559,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.020Z"
                }
            ]
        },
        {
            "id": 1054560,
            "name": "",
            "key": "ae462a3a-7041-4a4c-b2fc-c656fda13c25",
            "description": null,
            "status": true,
            "position": 2,
            "icon": null,
            "conditions": null,
            "product_list_type": "PRODUCTS",
            "additional_data": {},
            "hide_step_bar": false,
            "step_title": "Add Plant Care Essentials",
            "box_set_id": 2434,
            "created_at": "2025-09-19T23:09:22.015Z",
            "updated_at": "2025-09-19T23:09:22.013Z",
            "is_box_review": false,
            "is_size_discount_selector": false,
            "translation": {
                "default": "Add Plant Care Essentials"
            },
            "elements": [
                {
                    "type": "CONTAINER_ROOT",
                    "key": "1b7ac840-c219-4abf-8b03-04f6fab7c290",
                    "children": [
                        "587a4740-16be-4c8a-8882-4f4b0565934a",
                        "f939af33-fd97-4f18-b3f3-efc1ae87572a",
                        "f38c0898-1adf-470a-9b65-5b750a290408",
                        "4ccd4b79-ae1b-4f4a-883b-f860df43f655"
                    ],
                    "additional_data": {},
                    "style": "width: 100%; height: fit-content; font-size: 16px; display: flex; flex-direction: column; background-color: rgba(255, 255, 255, 0);",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 16738,
                    "style_tablet": null,
                    "style_mobile": "",
                    "box_set_step_id": 1054560,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.020Z"
                },
                {
                    "type": "GROUP",
                    "key": "f04eccd5-ddf4-415f-9f51-48e0b9c11072",
                    "children": [
                        "8d1d621f-e25c-4833-8cf4-1d7c7515ae3d",
                        "434da1b0-9e99-429b-8e79-0535d55221a4"
                    ],
                    "additional_data": {
                        "element_name": "Text Group"
                    },
                    "style": "font-family: Inter; height: fit-content; font-size: 16px; padding: 16px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: flex; flex-direction: column; justify-content: center; width: 300px; gap: 16px; object-fit: contain; align-items: center;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 22315,
                    "style_tablet": "",
                    "style_mobile": "width: 100%; min-width: 100%; gap: 16px;",
                    "box_set_step_id": 1054560,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.020Z"
                },
                {
                    "type": "TEXT",
                    "key": "434da1b0-9e99-429b-8e79-0535d55221a4",
                    "children": [],
                    "additional_data": {
                        "element_name": "Text",
                        "content": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"color: rgb(255, 255, 255); white-space: pre-wrap;\">Mix and match your favorite houseplant, stylish planter, and must-have care items. </span></p>",
                        "global_typography_preset": "paragraph"
                    },
                    "style": "font-family: Inter; width: fit-content; height: fit-content; letter-spacing: normal; line-height: 1.2em; font-size: 16px; text-align: left; font-weight: 400; object-fit: contain; text-transform: none;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 23496,
                    "style_tablet": "",
                    "style_mobile": "font-size: 14px;",
                    "box_set_step_id": 1054560,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.021Z",
                    "translation": null
                },
                {
                    "type": "HEADING",
                    "key": "8d1d621f-e25c-4833-8cf4-1d7c7515ae3d",
                    "children": [],
                    "additional_data": {
                        "element_name": "Heading",
                        "content": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"color: rgb(255, 255, 255); white-space: pre-wrap;\">Create Your Perfect Plant Combo</span></p>",
                        "global_typography_preset": "h1"
                    },
                    "style": "font-family: Inter; width: 100%; height: fit-content; letter-spacing: normal; font-size: 48px; text-align: left; font-weight: 700; line-height: 1.2em; text-transform: none;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 18974,
                    "style_tablet": "",
                    "style_mobile": "font-size: 24px;",
                    "box_set_step_id": 1054560,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.021Z",
                    "translation": null
                },
                {
                    "type": "HEADING",
                    "key": "f38c0898-1adf-470a-9b65-5b750a290408",
                    "children": [],
                    "additional_data": {
                        "element_name": "Heading",
                        "content": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Keep It Thriving 🌿</span></p>",
                        "global_typography_preset": "custom"
                    },
                    "style": "font-family: \"Tenor Sans\"; width: 100%; height: fit-content; font-size: 32px; line-height: 1.2em; letter-spacing: normal; text-align: left; font-weight: 700; text-transform: none;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 18975,
                    "style_tablet": "",
                    "style_mobile": "font-size: 24px; font-family: \"Tenor Sans\"; text-align: center;",
                    "box_set_step_id": 1054560,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.021Z",
                    "translation": null
                },
                {
                    "type": "PRODUCT_COLLECTION_LIST",
                    "key": "4ccd4b79-ae1b-4f4a-883b-f860df43f655",
                    "children": [],
                    "additional_data": {
                        "source_type": "PRODUCTS",
                        "element_name": "Product List: Grid",
                        "enabled_filters": false,
                        "enable_search_bar": false,
                        "config_name_variant": "{variantName}",
                        "products": [
                            {
                                "id": "gid://shopify/Product/7715807232048",
                                "variants": [
                                    {
                                        "id": "gid://shopify/ProductVariant/42236683092016"
                                    }
                                ]
                            },
                            {
                                "id": "gid://shopify/Product/7715807199280",
                                "variants": [
                                    {
                                        "id": "gid://shopify/ProductVariant/42236683059248"
                                    }
                                ]
                            },
                            {
                                "id": "gid://shopify/Product/7713789935664",
                                "variants": [
                                    {
                                        "id": "gid://shopify/ProductVariant/42230341304368"
                                    }
                                ]
                            },
                            {
                                "id": "gid://shopify/Product/7713789640752",
                                "variants": [
                                    {
                                        "id": "gid://shopify/ProductVariant/42230338322480"
                                    }
                                ]
                            },
                            {
                                "id": "gid://shopify/Product/7713789771824",
                                "variants": [
                                    {
                                        "id": "gid://shopify/ProductVariant/42230339698736"
                                    }
                                ]
                            },
                            {
                                "id": "gid://shopify/Product/7713790033968",
                                "variants": [
                                    {
                                        "id": "gid://shopify/ProductVariant/42230342320176"
                                    }
                                ]
                            },
                            {
                                "id": "gid://shopify/Product/7713789607984",
                                "variants": [
                                    {
                                        "id": "gid://shopify/ProductVariant/42230338289712"
                                    }
                                ]
                            },
                            {
                                "id": "gid://shopify/Product/7713789804592",
                                "variants": [
                                    {
                                        "id": "gid://shopify/ProductVariant/42230339960880"
                                    }
                                ]
                            }
                        ],
                        "enable_display_name": true,
                        "enable_display_price": true,
                        "enable_quick_view": true
                    },
                    "style": "width: 100%; height: fit-content; font-size: 16px; margin: 0px;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 13152,
                    "style_tablet": "",
                    "style_mobile": "margin: 0px;",
                    "box_set_step_id": 1054560,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.021Z"
                },
                {
                    "type": "IMAGE",
                    "key": "e37bdf12-3210-49a0-a1a2-dee8ff52bf3c",
                    "children": [],
                    "additional_data": {
                        "element_name": "Image 1",
                        "image_desktop": "https://cdn.shopify.com/s/files/1/0631/6657/8736/files/t_584b8510-4d13-43df-acb6-ac667cb939b5.webp?v=1754490465",
                        "image_mobile": null,
                        "preview_image": "https://cdn.shopify.com/s/files/1/0932/1391/7482/files/Group_4_2.png",
                        "hiddenState": {
                            "mobile": true
                        },
                        "hidden_state": {
                            "mobile": true
                        }
                    },
                    "style": "width: 50%; height: unset; font-size: 16px; font-family: Inter; min-height: 200px; object-fit: cover;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 11606,
                    "style_tablet": "",
                    "style_mobile": "width: 100%; min-width: 100%; object-fit: contain;",
                    "box_set_step_id": 1054560,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.021Z",
                    "translation": null
                },
                {
                    "type": "IMAGE",
                    "key": "1c3f90f3-77e0-4d01-b559-81bcb3cf282e",
                    "children": [],
                    "additional_data": {
                        "element_name": "Image 2",
                        "image_desktop": "https://cdn.shopify.com/s/files/1/0631/6657/8736/files/ff_f0bbf312-20f6-44fc-9da2-9eb0a34eca77.webp?v=1754490473",
                        "image_mobile": "https://cdn.shopify.com/s/files/1/0631/6657/8736/files/ff_c91ad706-0981-447d-8b67-377eb11edfb8.webp?v=1754804462",
                        "preview_image": "https://cdn.shopify.com/s/files/1/0932/1391/7482/files/Group_5_2.png",
                        "isHidden": false,
                        "hiddenState": {
                            "mobile": false
                        }
                    },
                    "style": "width: 50%; height: unset; font-size: 16px; font-family: Inter; min-height: 200px; object-fit: cover;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 11607,
                    "style_tablet": "",
                    "style_mobile": "width: 100%; min-width: 100%; object-fit: cover; height: 400px; min-height: 1px;",
                    "box_set_step_id": 1054560,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.021Z",
                    "translation": null
                },
                {
                    "type": "DUAL_IMAGE_BANNER",
                    "key": "587a4740-16be-4c8a-8882-4f4b0565934a",
                    "children": [
                        "f04eccd5-ddf4-415f-9f51-48e0b9c11072",
                        "e37bdf12-3210-49a0-a1a2-dee8ff52bf3c",
                        "1c3f90f3-77e0-4d01-b559-81bcb3cf282e"
                    ],
                    "additional_data": {
                        "element_name": "Dual Image Banner",
                        "image_layout": "side-by-side",
                        "gap_size": "medium",
                        "isHidden": true,
                        "hiddenState": {
                            "mobile": true,
                            "desktop": true
                        },
                        "hidden_state": {
                            "mobile": true
                        }
                    },
                    "style": "width: unset; height: 250px; font-size: 16px; font-family: Inter; display: flex; flex-direction: row; padding: 0px; object-fit: cover; background: #FFF; overflow: hidden; position: relative;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 167,
                    "style_tablet": "",
                    "style_mobile": "display: flex; flex-direction: column; height: 100%;",
                    "box_set_step_id": 1054560,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.021Z",
                    "translation": null
                },
                {
                    "type": "STEP_BAR",
                    "key": "f939af33-fd97-4f18-b3f3-efc1ae87572a",
                    "children": [],
                    "additional_data": {
                        "element_name": "Step Bar"
                    },
                    "shop": "kurobaedo.myshopify.com",
                    "id": 12567,
                    "box_set_step_id": 1054560,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.021Z"
                }
            ]
        },
        {
            "id": 1054561,
            "name": "",
            "key": "39bf0a82-87ad-46bd-b667-342301a945f7",
            "description": null,
            "status": true,
            "position": 3,
            "icon": null,
            "conditions": null,
            "product_list_type": "PRODUCTS",
            "additional_data": {},
            "hide_step_bar": false,
            "step_title": "Box Review",
            "box_set_id": 2434,
            "created_at": "2025-09-19T23:09:22.015Z",
            "updated_at": "2025-09-19T23:09:22.013Z",
            "is_box_review": true,
            "is_size_discount_selector": false,
            "translation": {
                "default": "Box Review"
            },
            "elements": [
                {
                    "type": "CONTAINER_ROOT",
                    "key": "aee6f17e-2a51-4e44-a67e-fec360063ebb",
                    "children": [
                        "6884bfee-e891-4425-9c89-3cb1df41271b",
                        "589c89cd-b9a3-40cc-9687-0ac58eb4e3b9"
                    ],
                    "additional_data": {},
                    "style": "width: 100%; height: fit-content; font-size: 16px; display: flex; flex-direction: column; background-color: rgba(255, 255, 255, 0);",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 16739,
                    "style_tablet": null,
                    "style_mobile": "",
                    "box_set_step_id": 1054561,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.021Z"
                },
                {
                    "type": "GROUP",
                    "key": "6884bfee-e891-4425-9c89-3cb1df41271b",
                    "children": [
                        "aca69e6c-aded-4db8-8b31-cd9d454dcb7c",
                        "ab803536-f2ce-4a16-89b3-aa0bd147f95c"
                    ],
                    "additional_data": {
                        "element_name": "Page information"
                    },
                    "style": "width: 100%; height: fit-content; font-size: 16px; display: flex; flex-direction: column; padding: 32px; background-color: rgba(var(--global-color-gray-600));",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 22316,
                    "style_tablet": "",
                    "style_mobile": "",
                    "box_set_step_id": 1054561,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.021Z"
                },
                {
                    "type": "TEXT",
                    "key": "ab803536-f2ce-4a16-89b3-aa0bd147f95c",
                    "children": [],
                    "additional_data": {
                        "content": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"color: rgb(126, 139, 153); white-space: pre-wrap;\">Here's everything you've picked – take a final look before heading to checkout.</span></p>",
                        "element_name": "Text",
                        "global_typography_preset": "custom"
                    },
                    "style": "width: 50%; height: fit-content; font-size: 16px; font-weight: 400; font-family: Inter; line-height: 1.2em; letter-spacing: normal; text-align: left; text-transform: none;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 23497,
                    "style_tablet": "",
                    "style_mobile": "width: unset; object-fit: contain; letter-spacing: 0em;",
                    "box_set_step_id": 1054561,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.021Z",
                    "translation": null
                },
                {
                    "type": "HEADING",
                    "key": "aca69e6c-aded-4db8-8b31-cd9d454dcb7c",
                    "children": [],
                    "additional_data": {
                        "content": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"color: rgb(0, 0, 0); white-space: pre-wrap;\">Review Your Box</span></p>",
                        "element_name": "Heading",
                        "global_typography_preset": "h3"
                    },
                    "style": "width: 100%; height: fit-content; font-size: 24px; font-weight: 700; font-family: Inter; line-height: 1.2em; letter-spacing: normal; text-align: left; text-transform: none;",
                    "shop": "kurobaedo.myshopify.com",
                    "id": 18976,
                    "style_tablet": "",
                    "style_mobile": "width: unset;",
                    "box_set_step_id": 1054561,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.021Z",
                    "translation": null
                },
                {
                    "type": "BOX_REVIEW",
                    "key": "589c89cd-b9a3-40cc-9687-0ac58eb4e3b9",
                    "children": [],
                    "additional_data": {
                        "element_name": "Box Review"
                    },
                    "shop": "kurobaedo.myshopify.com",
                    "id": 2109,
                    "box_set_step_id": 1054561,
                    "created_at": "2025-09-19T23:09:22.026Z",
                    "updated_at": "2025-09-19T23:09:22.021Z",
                    "translation": null
                }
            ]
        }
    ],
    "box_set_cart_transform_bundle_product": {
        "id": 2214,
        "box_set_id": 2434,
        "product_id": "gid://shopify/Product/9083872772321",
        "variant_id": "gid://shopify/ProductVariant/47163281899745",
        "inventory_tracked": 0,
        "created_at": "2025-09-19T23:09:23.242Z",
        "updated_at": "2025-09-19T23:09:23.241Z"
    }
}
const data3 = {
    "_id": "48662d02-6190-4eee-a48b-61e996dfa524",
    "__v": 0,
    "children": [
        "662d0261-901e-4ee4-8b61-e996dfa52463"
    ],
    "createdAt": "2025-09-18T18:29:25.462Z",
    "styles": [],
    "type": "Layout",
    "updatedAt": "2025-09-27T19:38:54.685Z"
}

const data4 = [
    {
        'id': '123',
        'children': ['1'],
        'type': 'GROUP',
        'createdAt': '2025-09-18T18:29:25.462Z',
        "updatedAt": "2025-09-27T19:38:54.685Z",
        'style': 'color: red',

    },
    {
        'id': '1',
        'children': ['1'],
        'type': 'GROUP',
        'createdAt': '2025-09-18T18:29:25.462Z',
        "updatedAt": "2025-09-27T19:38:54.685Z",
        'style': 'color: red',
    }

]
const data2 =
    [
        {
            "type": "CONTAINER_ROOT",
            "key": "8eaa81c5-57c8-4fd5-ad63-3bfb7eaf4ae4",
            "children": [
                "f5cbe5e2-365c-4a70-9d10-0cc0ca567a91",
                "c298905c-050b-487e-ab15-52d55fd8563f",
                "6585f099-dac8-4cd9-89e6-2c2892730f25",
                "2a7b5b51-a31f-4101-b79e-e2390e819879"
            ],
            "additional_data": {},
            "style": "width: 100%; height: fit-content; font-size: 16px; display: flex; flex-direction: column; background-color: rgba(255, 255, 255, 0);",
            "shop": "kurobaedo.myshopify.com",
            "id": 16736,
            "style_tablet": null,
            "style_mobile": "",
            "box_set_step_id": 1054558,
            "created_at": "2025-09-19T23:09:22.026Z",
            "updated_at": "2025-09-19T23:09:22.018Z"
        },
        {
            "type": "GROUP",
            "key": "4db2a818-9170-4d08-a800-6f3c9bb720d0",
            "children": [
                "c5dbaccc-c0ef-4eeb-ad7d-0f1ae799d4bf",
                "7fb98ade-c16a-496e-b990-bce0fea42a17"
            ],
            "additional_data": {
                "element_name": "Text Group"
            },
            "style": "font-family: Inter; height: fit-content; font-size: 16px; padding: 16px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: flex; flex-direction: column; justify-content: center; width: 300px; gap: 16px; object-fit: contain; align-items: center;",
            "shop": "kurobaedo.myshopify.com",
            "id": 22313,
            "style_tablet": "",
            "style_mobile": "width: 100%; min-width: 100%; gap: 16px; object-fit: contain;",
            "box_set_step_id": 1054558,
            "created_at": "2025-09-19T23:09:22.026Z",
            "updated_at": "2025-09-19T23:09:22.018Z"
        },
        {
            "type": "TEXT",
            "key": "7fb98ade-c16a-496e-b990-bce0fea42a17",
            "children": [],
            "additional_data": {
                "element_name": "Text",
                "content": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"color: rgb(255, 255, 255); white-space: pre-wrap;\">Mix and match your favorite houseplant, stylish planter, and must-have care items. </span></p>",
                "global_typography_preset": "paragraph"
            },
            "style": "font-family: Inter; width: 100%; height: fit-content; letter-spacing: normal; line-height: 1.2em; font-size: 16px; text-align: left; font-weight: 400; text-transform: none;",
            "shop": "kurobaedo.myshopify.com",
            "id": 23494,
            "style_tablet": "",
            "style_mobile": "font-size: 14px;",
            "box_set_step_id": 1054558,
            "created_at": "2025-09-19T23:09:22.026Z",
            "updated_at": "2025-09-19T23:09:22.018Z",
            "translation": null
        },
        {
            "type": "HEADING",
            "key": "c5dbaccc-c0ef-4eeb-ad7d-0f1ae799d4bf",
            "children": [],
            "additional_data": {
                "element_name": "Heading",
                "content": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"color: rgb(255, 255, 255); white-space: pre-wrap;\">Create Your Perfect Plant Combo</span></p>",
                "global_typography_preset": "h1"
            },
            "style": "font-family: Inter; width: 100%; height: fit-content; letter-spacing: normal; font-size: 48px; text-align: left; font-weight: 700; line-height: 1.2em; text-transform: none; object-fit: contain;",
            "shop": "kurobaedo.myshopify.com",
            "id": 18970,
            "style_tablet": "",
            "style_mobile": "font-size: 24px; object-fit: contain; color: rgb(177, 6, 6);",
            "box_set_step_id": 1054558,
            "created_at": "2025-09-19T23:09:22.026Z",
            "updated_at": "2025-09-19T23:09:22.018Z",
            "translation": null
        },
        {
            "type": "HEADING",
            "key": "6585f099-dac8-4cd9-89e6-2c2892730f25",
            "children": [],
            "additional_data": {
                "element_name": "Heading",
                "content": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Pick Your Green Companion 🌱</span><br></p>",
                "global_typography_preset": "custom"
            },
            "style": "font-family: \"Tenor Sans\"; width: 100%; height: fit-content; font-size: 32px; line-height: 1.2em; letter-spacing: normal; text-align: left; font-weight: 700; text-transform: none; object-fit: contain;",
            "shop": "kurobaedo.myshopify.com",
            "id": 18971,
            "style_tablet": "",
            "style_mobile": "font-family: \"Tenor Sans\"; font-size: 24px; text-align: center;",
            "box_set_step_id": 1054558,
            "created_at": "2025-09-19T23:09:22.026Z",
            "updated_at": "2025-09-19T23:09:22.018Z",
            "translation": {
                "default": "<p class=\"sbb-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Pick Your Green Companion 🌱</span></p>"
            }
        },
        {
            "type": "PRODUCT_COLLECTION_LIST",
            "key": "2a7b5b51-a31f-4101-b79e-e2390e819879",
            "children": [],
            "additional_data": {
                "source_type": "PRODUCTS",
                "element_name": "Product List: Grid",
                "enabled_filters": false,
                "enable_search_bar": false,
                "config_name_variant": "{variantName}",
                "products": [
                    {
                        "id": "gid://shopify/Product/7713832566832",
                        "variants": [
                            {
                                "id": "gid://shopify/ProductVariant/42230675472432"
                            }
                        ]
                    },
                    {
                        "id": "gid://shopify/Product/7713786921008",
                        "variants": [
                            {
                                "id": "gid://shopify/ProductVariant/42230319644720"
                            }
                        ]
                    },
                    {
                        "id": "gid://shopify/Product/7713786822704",
                        "variants": [
                            {
                                "id": "gid://shopify/ProductVariant/42230319054896"
                            }
                        ]
                    },
                    {
                        "id": "gid://shopify/Product/7713832960048",
                        "variants": [
                            {
                                "id": "gid://shopify/ProductVariant/42230676324400"
                            }
                        ]
                    },
                    {
                        "id": "gid://shopify/Product/7713786724400",
                        "variants": [
                            {
                                "id": "gid://shopify/ProductVariant/42230318202928"
                            }
                        ]
                    },
                    {
                        "id": "gid://shopify/Product/7713786527792",
                        "variants": [
                            {
                                "id": "gid://shopify/ProductVariant/42230315253808"
                            }
                        ]
                    },
                    {
                        "id": "gid://shopify/Product/7713786757168",
                        "variants": [
                            {
                                "id": "gid://shopify/ProductVariant/42230318497840"
                            }
                        ]
                    },
                    {
                        "id": "gid://shopify/Product/7713786495024",
                        "variants": [
                            {
                                "id": "gid://shopify/ProductVariant/42230315221040"
                            }
                        ]
                    }
                ],
                "enable_display_name": true,
                "enable_display_price": true
            },
            "style": "width: 100%; height: fit-content; font-size: 16px; margin: 0px;",
            "shop": "kurobaedo.myshopify.com",
            "id": 13150,
            "style_tablet": "",
            "style_mobile": "margin: 0px; object-fit: contain;",
            "box_set_step_id": 1054558,
            "created_at": "2025-09-19T23:09:22.026Z",
            "updated_at": "2025-09-19T23:09:22.018Z"
        },
        {
            "type": "IMAGE",
            "key": "20b62226-4089-4e20-a3b2-27278cda5cc6",
            "children": [],
            "additional_data": {
                "element_name": "Image 1",
                "image_desktop": "https://cdn.shopify.com/s/files/1/0631/6657/8736/files/t_94e7c0c8-38ab-41df-a378-36d8efefe38c.webp?v=1754489559",
                "image_mobile": null,
                "preview_image": "https://cdn.shopify.com/s/files/1/0932/1391/7482/files/Group_4_2.png",
                "hiddenState": {
                    "desktop": false,
                    "mobile": true
                },
                "hidden_state": {
                    "mobile": true
                }
            },
            "style": "font-family: Inter; font-size: 16px; min-height: 200px; width: 50%; height: 250px; object-fit: cover; object-position: left center;",
            "shop": "kurobaedo.myshopify.com",
            "id": 11602,
            "style_tablet": "",
            "style_mobile": "width: 100%; min-width: 100%; height: 1%;",
            "box_set_step_id": 1054558,
            "created_at": "2025-09-19T23:09:22.026Z",
            "updated_at": "2025-09-19T23:09:22.019Z",
            "translation": null
        },
        {
            "type": "IMAGE",
            "key": "37b1b88a-72a2-4eb7-8253-cfe614156321",
            "children": [],
            "additional_data": {
                "element_name": "Image 2",
                "image_desktop": "https://cdn.shopify.com/s/files/1/0631/6657/8736/files/ff_a21dff4d-88cd-44e9-903b-837f726ea868.webp?v=1754489566",
                "image_mobile": "https://cdn.shopify.com/s/files/1/0631/6657/8736/files/ff_59d2ca63-e614-4631-bdfa-863884e5b10b.webp?v=1754489789",
                "preview_image": "https://cdn.shopify.com/s/files/1/0932/1391/7482/files/Group_5_2.png"
            },
            "style": "font-family: Inter; font-size: 16px; min-height: 200px; width: 50%; height: 250px; object-fit: cover; object-position: left center;",
            "shop": "kurobaedo.myshopify.com",
            "id": 11603,
            "style_tablet": "",
            "style_mobile": "width: 100%; min-width: 100%; height: 400px; object-position: center center; object-fit: cover;",
            "box_set_step_id": 1054558,
            "created_at": "2025-09-19T23:09:22.026Z",
            "updated_at": "2025-09-19T23:09:22.020Z",
            "translation": null
        },
        {
            "type": "DUAL_IMAGE_BANNER",
            "key": "f5cbe5e2-365c-4a70-9d10-0cc0ca567a91",
            "children": [
                "4db2a818-9170-4d08-a800-6f3c9bb720d0",
                "20b62226-4089-4e20-a3b2-27278cda5cc6",
                "37b1b88a-72a2-4eb7-8253-cfe614156321"
            ],
            "additional_data": {
                "element_name": "Dual Image Banner",
                "image_layout": "side-by-side",
                "gap_size": "medium"
            },
            "style": "width: unset; height: 250px; font-size: 16px; font-family: Inter; display: flex; flex-direction: row; padding: 0px; object-fit: cover; background: #FFF; overflow: hidden; position: relative;",
            "shop": "kurobaedo.myshopify.com",
            "id": 165,
            "style_tablet": "",
            "style_mobile": "display: flex; flex-direction: column; height: 100%;",
            "box_set_step_id": 1054558,
            "created_at": "2025-09-19T23:09:22.026Z",
            "updated_at": "2025-09-19T23:09:22.020Z",
            "translation": null
        },
        {
            "type": "STEP_BAR",
            "key": "c298905c-050b-487e-ab15-52d55fd8563f",
            "children": [],
            "additional_data": {
                "element_name": "Step Bar"
            },
            "shop": "kurobaedo.myshopify.com",
            "id": 12565,
            "box_set_step_id": 1054558,
            "created_at": "2025-09-19T23:09:22.026Z",
            "updated_at": "2025-09-19T23:09:22.020Z"
        }
    ]





