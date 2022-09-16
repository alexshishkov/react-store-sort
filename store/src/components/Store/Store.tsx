import React from 'react';
import products from '../../products';
import Card from './Card/Card';
import c from './Store.module.css';

interface State {
  inputValue: string;
}

interface Props {
  name?: string;
}

class Store extends React.Component<Props, State> {
  state: State = {
    inputValue: localStorage.getItem('inputValue') || '',
  };
  createStr(value: string) {
    this.setState({
      inputValue: value,
    });
    this.createfilterProducts();
  }

  createfilterProducts() {
    localStorage.setItem('inputValue', this.state.inputValue);
    const filterProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(this.state.inputValue.toLocaleLowerCase());
    });
    return filterProducts;
  }

  render() {
    return (
      <>
        <div data-testid="store" className={c.wrapper}>
          <form className={c.search__bar}>
            <input
              value={this.state.inputValue}
              type="text"
              placeholder="search"
              onChange={(event) => this.createStr(event.target.value)}
            />
            <img src="../../assets/search_FILL0_wght400_GRAD0_opsz48.svg" alt="search" />
          </form>
          <div className={c.cards}>
            <Card products={this.createfilterProducts()} />
          </div>
        </div>
      </>
    );
  }
}

export default Store;
