import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import CommentList from './CommentList';
import PropTypes from 'prop-types';

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired
  };

  componentWillReceiveProps(nextProps) {
    console.log('---', 'updating', this.props.isOpen, nextProps.isOpen)
  }

  componentWillMount() {
    console.log('---', 'mounting')
  }

  componentDidMount() {
    console.log('---', 'mounted')
  }

  getBody = () => {
    const {article, isOpen} = this.props;
    if (!isOpen) return null;
    return (
      <section>
        {article.text}
        <CommentList comments={article.comments} ref={this.setCommentsRef}/>
      </section>
    );
  };

  setContainerRef = ref => {
    this.container = ref;
    console.log('---', ref)
  };

  setCommentsRef = ref => {
    console.log('---', findDOMNode(ref))
  };

  render() {
    const {article, isOpen, toggleOpen} = this.props;
    return (
      <div ref={this.setContainerRef}>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>{isOpen ? "Close" : "Open"}</button>
        {this.getBody()}
      </div>
    )
  }
}

export default Article;