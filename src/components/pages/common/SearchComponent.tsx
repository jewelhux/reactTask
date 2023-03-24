import { IHeadInput } from '../../utils/interfaces';
import React, { Component } from 'react';

type HeadProps = Record<string, never>;

export class SearchComponent extends Component<HeadProps, IHeadInput> {
  constructor(props: HeadProps) {
    super(props);
    this.state = {
      searchInput: '',
    };
  }

  componentDidMount() {
    const startInput = localStorage.getItem('jikSearch') ?? '';
    if (startInput || startInput === '') {
      this.setState({ searchInput: startInput });
    }
  }

  componentDidUpdate(prevProps: HeadProps, prevState: IHeadInput) {
    if (this.state.searchInput !== prevState.searchInput) {
      localStorage.setItem('jikSearch', this.state.searchInput);
    }
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    return (
      <div className="search-bar">
        <input type="text" value={this.state.searchInput} onChange={this.handleInputChange}></input>
        <button>Search</button>
      </div>
    );
  }
}
