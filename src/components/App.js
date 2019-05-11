import React, {Component} from 'react';
import ArticleList from './ArticleList';
import ArticleChart from './ArticlesChart';
import UserForm from './UserForm';
import Filters from './Filters';
import Counter from './Counter';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  };

  render() {
    const {articles} = this.props;

    return (
      <div>
        <Counter/>
        <UserForm/>
        <Filters articles={articles}/>
        <ArticleList articles={articles}/>
        <ArticleChart articles={articles}/>
      </div>
    );
  }
}

export default App;