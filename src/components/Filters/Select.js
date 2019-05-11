import React, {Component} from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  };

  state = {
    selected: []
  };

  handleChange = selected => this.setState({selected});

  render() {
    const {selected} = this.state;
    const {articles} = this.props;

    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }));

    return <Select
      options={options}
      value={selected}
      isMulti
      onChange={this.handleChange}
    />
  }
}

export default SelectFilter;