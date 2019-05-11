import React, {PureComponent} from 'react';
import CommentList from '../CommentList';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import './style.css';
// import {Component} from 'react';
// import {findDOMNode} from 'react-dom';

class Article extends PureComponent {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired
  };

  // Lifecycle methods
  // componentWillReceiveProps(nextProps) {
  //   console.log('---', 'updating', this.props.isOpen, nextProps.isOpen)
  // }
  //
  // componentWillMount() {
  //   console.log('---', 'mounting')
  // }
  //
  // componentDidMount() {
  //   console.log('---', 'mounted')
  // }
  //
  // shouldComponentUpdate(nextProps) {
  //   return nextProps.isOpen !== this.props.isOpen
  // }

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
    // console.log('---', ref)
  };

  setCommentsRef = ref => {
    // console.log('---', findDOMNode(ref))
  };

  render() {
    const {article, isOpen, toggleOpen} = this.props;
    return (
      <div ref={this.setContainerRef}>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>{isOpen ? "Close" : "Open"}</button>
        <CSSTransitionGroup
          transitionName="article"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={500}
          component="div"
        >
          {this.getBody()}
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default Article;