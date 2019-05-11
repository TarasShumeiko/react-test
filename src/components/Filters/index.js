import React, {Component} from 'react';
import SelectFilter from './Select';
import DateRange from './DateRange';
import PropTypes from 'prop-types';

class Filters extends Component {
  static propTypes = {
    articles: PropTypes.array
  };

  render() {
    return (
      <div>
        <SelectFilter articles={this.props.articles}/>
        <DateRange/>
      </div>
    );
  }
}

export default Filters;