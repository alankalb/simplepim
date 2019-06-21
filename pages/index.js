import { Page, Layout, Card, FormLayout, TextField } from '@shopify/polaris';
import CreateProduct from '../components/CreateProduct.js'


const Index = () => (
  <div>
    <Page
      title="Simple PIM Example"
      separator
    >
      <CreateProduct></CreateProduct>
    </Page>
  </div>
);

export default Index;