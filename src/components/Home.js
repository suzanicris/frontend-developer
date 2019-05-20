import React from "react";
import Input from "./Input";

class Home extends React.Component {
  state = { term: "", products: [] };

  onInputChange = e => {
    const value = e.target.value.toLowerCase();
    this.setState({
      term: value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    console.log(this.state.term);
  };

  render() {
    return (
      <div>
        <Input
          onInputChange={this.onInputChange}
          onFormSubmit={this.onFormSubmit}
        />

        <Products products={this.state.products} />
      </div>
    );
  }
}

export default Home;
