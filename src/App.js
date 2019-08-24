import React, { Component } from 'react';
import './App.css';

// Imported customized components
import Header from './Components/Header';
import About from './Components/About';
import ProductCard from './Components/ProductCard';

// imported images
import logo from './images/biohazard.png';
import gasMask from './images/gas_mask.png';
import revolver from './images/revolver.png';
import knife from './images/knife.png';

// Array holding ALL properties to be passed on to Components
const properties = {
  isLoggedIn: true,
  aboutUsText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus, mi nec fermentum congue, turpis nibh porttitor ex, sed commodo neque eros non libero. Donec mauris felis, malesuada nec consectetur et, pharetra in ante. Praesent nec hendrerit purus. Ut vel nunc id nisl volutpat porta. Cras in convallis ipsum. Integer id sollicitudin ex. Ut sed iaculis nisl. Vestibulum sit amet neque nec eros interdum laoreet nec vitae justo. Maecenas scelerisque finibus nisl, a iaculis mauris fermentum sed. Pellentesque faucibus, turpis quis ultrices facilisis, metus eros vulputate augue, sit amet sodales nisl lacus ut massa. Pellentesque vitae dolor nulla. Nullam ultricies imperdiet nisl, interdum placerat dolor posuere a. Nunc tempor sed sapien nec dictum. Morbi eleifend tellus vitae nunc tincidunt viverra. Duis vitae justo eget purus bibendum dictum quis feugiat turpis. Curabitur ultrices purus ut ipsum ullamcorper, sit amet faucibus nisl commodo. Nulla aliquet ante eu leo tincidunt, a tempor nibh maximus.',
  productDetails: [
    {
      key: 'gas-mask',
      name: 'Gas Mask',
      imageSource: gasMask,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus, mi nec fermentum congue, turpis nibh porttitor ex.',
      url: 'gassmask.html'
    },
    {
      key: 'revolver',
      name: 'Revolver',
      imageSource: revolver,
      description: 'Praesent nec hendrerit purus. Ut vel nunc id nisl volutpat porta. Cras in convallis ipsum. Integer id sollicitudin ex. Ut sed iaculis nisl.',
      url: 'revolver.html'
    },
    {
      key: 'knife',
      name: 'Knife',
      imageSource: knife,
      description: 'Vestibulum varius bibendum metus. Aliquam erat volutpat. Vestibulum dignissim quam at ligula cursus iaculis.',
      url: 'knife.html'
    },
  ]
};

// Returns a set of props for each product in the 'productDetails' array, which is itself a
// property of the 'properties' object
const productCardProps = properties.productDetails.map((item) => {
  return <ProductCard
    key={item.key}
    name={item.name}
    imageSource={item.imageSource}
    description={item.description}
    url={item.url}
  />
});

class App extends Component {
  render() {
    return (
      <div className='App'>
        <link rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous">
        </link>

        {/* Componets to be rendered */}
        <Header name='Jeff' isLoggedIn={properties.isLoggedIn} image={logo} />
        <About aboutUs={properties.aboutUsText} />
        <div className='Popular-products'>
          <h2>Some of our most popular products</h2>
          {productCardProps}
        </div>
      </div>
    );
  }
}

export default App;
