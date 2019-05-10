import React, {Component} from 'react';
import ArticleList from './ArticleList';
import ArticleChart from './ArticlesChart';
import UserForm from './UserForm';
import Calendar from './Calendar';
import PropTypes from 'prop-types';
import Select from 'react-select';

class App extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  };

  state ={
    selection: null
  };

  changeSelection = selection => this.setState({selection});

  render() {
    const options = this.props.articles.map(article => ({
      label: article.title,
      value: article.id
    }));
    return (
      <div>
        <UserForm/>
        <Select options={options} value={this.state.selection} onChange={this.changeSelection} isMulti/>
        <Calendar/>
        <ArticleList articles={this.props.articles}/>
        <ArticleChart articles={this.props.articles}/>
      </div>
    );
  }
}

export default App;