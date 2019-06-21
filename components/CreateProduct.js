import { TextField, Layout, Card, FormLayout, TextContainer } from '@shopify/polaris';

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
    

    return (
      <Layout sectioned={true}>
      <Layout.AnnotatedSection 
        title="Create a Product" 
        description="Use the Product API POST endpoint to create a new product."
      >
        <Card
          sectioned 
          primaryFooterAction={{content: 'Create Product'}}
        >
          <Card.Section>
            <FormLayout>
              <TextField label="Title" onChange={this.handleChange('title')} value={this.state.title}/>
              <TextField label="Description" multiline onChange={this.handleChange('description')} value={this.state.description} />
              <TextField label="Price" type="number" onChange={this.handleChange('price')} value={this.state.price} />
            </FormLayout>
          </Card.Section>
          <Card.Section>
            <TextContainer>
              <p>POST /admin/products.json</p>
              <p>{"{"}</p>
              <p className="indent1" >
                {'"'}title{'"'}: {'"'}{this.state.title}{'"'},
              </p>
              <p className="indent1" >
                {'"'}body_html{'"'}: {'"'}{this.state.description}{'"'},
              </p>
              <p className="indent1" >
                {'"'}variants{'"'}: [
              </p>
              <p className="indent2" >
                {'{'}
              </p>
              <p className="indent3" >
                {'"'}price{'"'}: {'"'}{this.state.price}{'"'}
              </p>
              <p className="indent2" >
                {'}'}
              </p>
              <p className="indent1" >
                ]
              </p>
              <p className="indent0" >
                {"}"}
              </p>

              
              
            </TextContainer>
          </Card.Section>
          
        </Card>
      </Layout.AnnotatedSection>
    </Layout>
    )
  }
}

export default CreateProduct;