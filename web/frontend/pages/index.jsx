import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets";

import { ProductsCard, OrdersTable } from "../components";

export default function HomePage() {
  return (
    <Page narrowWidth>
      <TitleBar title="Laravel App" primaryAction={null} />
      <Layout>
          <OrdersTable />
        <Layout.Section>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
