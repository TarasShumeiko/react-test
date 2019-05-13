import React, {Component} from 'react';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Filters from './Filters';
import Counter from './Counter';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';

class App extends Component {
  // static propTypes = {
  //   articles: PropTypes.array
  // };

  render() {
    const {articles} = this.props;

    return (
      <div>
        <Counter/>
        <UserForm/>
        <Filters articles={articles}/>
        <ArticleList articles={articles}/>
      </div>
    );
  }
}

export default connect(state => ({
  articles: state.filters
}))(App);