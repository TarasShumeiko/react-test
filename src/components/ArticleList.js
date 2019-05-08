import React, {Component} from 'react';
import Article from './Article';

class ArticleList extends Component {
  state = {
    openArticleId: null
  };

  toggleOpenArticle(openArticleId) {
    this.setState({openArticleId})
  };

  render() {
    const {articles} = this.props;
    const articleElements = articles.map(article => <li key={article.id}>
      <Article
        article={article}
        isOpen={article.id === this.state.openArticleId}
        toggleOpen={this.toggleOpenArticle.bind(this, article.id)}
      />
    </li>);

    return (
      <ul>
        {articleElements}
        <div>1</div>
      </ul>
    )
  }
}

export default ArticleList;