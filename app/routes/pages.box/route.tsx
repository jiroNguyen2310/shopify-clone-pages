import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { authenticate } from "app/shopify.server";
import './styles.scss'
import {
  Box, Frame, InlineStack, Text, Card,
  Navigation,
  Button,
  Badge,
  BlockStack,
} from "@shopify/polaris";
import { Modal, TitleBar } from '@shopify/app-bridge-react';
import { useNavigate } from "@remix-run/react";
import { useState, useCallback } from 'react';
import {
  ViewIcon,
  EditIcon,
  SettingsIcon,
  ProductIcon,
} from '@shopify/polaris-icons';
import { BoxContent } from "app/components/BoxContent/BoxContent";
import { BoxRender } from "app/components/BoxRender/BoxRender";
import { BoxMenu } from "app/components/BoxMenu/BoxMenu";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);
  return null;
};

export async function action({ request }: ActionFunctionArgs) {
  return null
}

export default function BoxEdit() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(true);
  const [selectedNavItem, setSelectedNavItem] = useState('general');
  const [activeStep, setActiveStep] = useState(1);
  function hideModal() {
    setModalOpen(false);
    navigate('/pages')
  }

  const handleNavigation = useCallback((itemId: string) => {
    setSelectedNavItem(itemId);
  }, []);

  const navigationItems = [
    {
      label: 'General',
      icon: SettingsIcon,
      onClick: () => handleNavigation('general'),
      selected: selectedNavItem === 'general'
    },
    {
      label: 'Box Content',
      icon: ProductIcon,
      onClick: () => handleNavigation('box-content'),
      selected: selectedNavItem === 'box-content'
    },
    {
      label: 'Discounts',
      icon: EditIcon,
      onClick: () => handleNavigation('discounts'),
      selected: selectedNavItem === 'discounts'
    },

  ];

  const stepItems = [
    { step: 1, title: 'Select Your Houseplant', active: activeStep === 1 },
    { step: 2, title: 'Choose a Planter', active: activeStep === 2 },
    { step: 3, title: 'Add Plant Care Essentials', active: activeStep === 3 }
  ];

  const renderNavigationContent = () => {
    return (
      <Navigation location="/">
        <Navigation.Section
          items={navigationItems}
        />
      </Navigation>
    );
  };

  const renderEditContent = () => {
    switch (selectedNavItem) {
      case 'general':
        return (
          <BlockStack gap="400">
            <Text variant="headingMd" as="h2">General Settings</Text>
            <Card>
              <BlockStack gap="300">
                <InlineStack gap="200">
                  <Badge>Dual Image Banner</Badge>
                  <Badge>Step Bar</Badge>
                  <Badge>Headings</Badge>
                </InlineStack>
              </BlockStack>
            </Card>
          </BlockStack>
        );
      case 'box-content':
        return (
          <BlockStack gap="400">
            <Text variant="headingMd" as="h2">Box Content</Text>
            <Card>
              Manage your product box content and layout
            </Card>
          </BlockStack>
        );
      case 'discounts':
        return (
          <BlockStack gap="400">
            <Text variant="headingMd" as="h2">Discounts</Text>
            <Card>
              Configure discount settings and promotions
            </Card>
          </BlockStack>
        );
      case 'templates':
        return (
          <BlockStack gap="400">
            <Text variant="headingMd" as="h2">Templates</Text>
            <Card>
              Choose and customize templates
            </Card>
          </BlockStack>
        );
      default:
        return null;
    }
  };

  const renderPreview = () => {
    return (
      <Card>
        <BlockStack gap="400">
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '20px',
            borderRadius: '8px',
            color: 'white',
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="30" height="30" fill="%23228B22" opacity="0.3"/><rect x="35" width="30" height="30" fill="%2332CD32" opacity="0.2"/><rect x="70" width="30" height="30" fill="%23228B22" opacity="0.3"/></svg>')`,
            backgroundSize: '200px 200px'
          }}>
            <Box padding="400">
              <BlockStack gap="200">
                <div style={{
                  background: '#FF1744',
                  padding: '16px 24px',
                  borderRadius: '8px',
                  display: 'inline-block'
                }}>
                  <Text variant="headingLg" as="h1" tone="base">
                    Create Your Perfect Plant Combo
                  </Text>
                </div>
                Mix and match your favorite houseplant, stylish planter, and must-have care items.
              </BlockStack>
            </Box>
          </div>

          <InlineStack gap="400" align="space-between">
            {stepItems.map((item) => (
              <div
                key={item.step}
                style={{
                  textAlign: 'center',
                  flex: 1,
                  opacity: item.active ? 1 : 0.6
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: item.active ? '#008060' : '#E1E3E5',
                  color: item.active ? 'white' : '#6D7175',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 8px',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}>
                  {item.step}
                </div>

              </div>
            ))}
          </InlineStack>
        </BlockStack>
      </Card>
    );
  };

  return (
    <Modal open={modalOpen} onHide={hideModal} id="box-modal" variant="max">
      <TitleBar title="BlueBox Editor">
        <button variant="primary" tone="critical" onClick={() => console.log("Deleting")}>
          Publish
        </button>
      </TitleBar>
      <Frame>
        <Box padding="300" background="bg-surface" borderStyle='solid' borderColor="border" borderBlockEndWidth='025'>
          <InlineStack align="space-between" blockAlign="center">
            <InlineStack gap="200" blockAlign="center">
              <Text variant="headingMd" as="h1">Box 123 </Text>
              <Badge tone="success">Enabled</Badge>
            </InlineStack>

            <InlineStack gap="200" blockAlign="center">
              <Badge progress="complete">Step 1</Badge>
              <Badge progress="complete">Step 2</Badge>
              <Badge progress="complete">Step 3</Badge>
              <Button variant="secondary">Box Review</Button>

            </InlineStack>

            <InlineStack gap="200" blockAlign="center">
              <Button
                icon={ViewIcon}
              >
                View live
              </Button>

            </InlineStack>
          </InlineStack>
        </Box>

        <div className="two-column">
          <BoxMenu />
          <InlineStack wrap={false} direction={'row'}>
            <BoxContent />
            <BoxRender />
          </InlineStack>
        </div>


        {/* <div style={{ display: 'flex', height: '70vh' }}>
          <div style={{
            width: '250px',
            borderRight: '1px solid #E1E3E5',
            backgroundColor: '#FAFBFB',
            overflow: 'auto'
          }}>
            <div style={{ padding: '16px' }}>
              {renderNavigationContent()}
            </div>
          </div>

          <div style={{
            width: '350px',
            borderRight: '1px solid #E1E3E5',
            padding: '20px',
            overflow: 'auto'
          }}>
            {renderEditContent()}
          </div>

          <div style={{
            flex: 1,
            padding: '20px',
            backgroundColor: '#F6F6F7',
            overflow: 'auto'
          }}>
            <BlockStack gap="400">
              <InlineStack align="space-between" blockAlign="center">
                <Text variant="headingMd" as="h2">Preview</Text>
                <ButtonGroup >
                  <Button pressed>Desktop</Button>
                  <Button>Mobile</Button>
                </ButtonGroup>
              </InlineStack>
              {renderPreview()}
            </BlockStack>
          </div>
        </div> */}

      </Frame>
    </Modal>

  );
}




