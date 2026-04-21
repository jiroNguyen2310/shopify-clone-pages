import { BlockStack, Box, Icon } from '@shopify/polaris'
import {
    SandboxIcon,
    LayoutBlockIcon,

} from '@shopify/polaris-icons';

export const BoxMenu = () => {
    return (
        <Box background="bg-surface" paddingBlockStart='200'>
            <BlockStack align='space-between' inlineAlign='center' reverseOrder={false} gap='400'>
                <BlockStack align='space-between' inlineAlign='center' reverseOrder={false}  >
                    <div
                        style={{
                            border: '1px solid #828d9e',
                            padding: '5px',
                            borderRadius: '10px'
                        }}
                    >
                        <Icon
                            source={SandboxIcon}
                            tone="base"
                        />
                    </div>
                    <span style={{ fontSize: '12px' }}>General</span>
                </BlockStack>
                <BlockStack align='space-between' inlineAlign='center' reverseOrder={false}>
                    <div style={{
                        border: '1px solid #828d9e',
                        padding: '5px',
                        borderRadius: '10px'
                    }}><Icon
                            source={LayoutBlockIcon}
                            tone="base"
                        /></div>

                    <p style={{ fontSize: '12px' }}>Element</p>
                </BlockStack >
            </BlockStack>
        </Box>
    )
}
