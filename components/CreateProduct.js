import { TextField, Layout, Card, FormLayout } from '@shopify/polaris';

class CreateProduct extends React.Component {
  state = {
    title: '',
    description: '',
    price: '0.00',
  };

  handleChange = field => {
    return value => this.setState({ [field]: value });
  };  

  render() {
    const { description } = this.state;
    const { title } = this.state;
    const { price } = this.state;

    return (
      <Layout sectioned={true}>
      <Layout.AnnotatedSection 
        title="Create a Product" 
        description="Use the Product API GET endpoint to create a new product."
      >
        <Card
          sectioned 
          primaryFooterAction={{content: 'Create Product'}}
        >
          <FormLayout>
            <TextField label="Title" onChange={this.handleChange('title')} value={this.state.title}/>
            <TextField label="Description" multiline onChange={this.handleChange('description')} value={this.state.description} />
            <TextField label="Price" type="number" onChange={this.handleChange('price')} value={this.state.price} />
          </FormLayout>
        </Card>
      </Layout.AnnotatedSection>
    </Layout>
    )
  }
}

export default CreateProduct;