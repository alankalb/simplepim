import { Page, Layout, Card, FormLayout, TextField } from '@shopify/polaris';


const Index = () => (
  <div>
    <Page
      title="Simple PIM Example"
      separator
    >
      <Layout sectioned={true}>
        <Layout.AnnotatedSection 
          title="Create a Product" 
          description="Use the Product API GET endpoint to create a new product."
        >
          <Card
            sectioned 
            primaryFooterAction={{content: 'Creaate Product'}}
          >
            <FormLayout>
              <TextField label="Title" onChange={() => {}} />
              <TextField label="Description" onChange={() => {}} />
              <TextField label="Price" onChange={() => {}} />
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>
      </Layout>
    </Page>
  </div>
);

export default Index;