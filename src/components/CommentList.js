import React, {Component} from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import toggleOpen from '../decorators/toggleOpen';
import PropTypes from 'prop-types';

class CommentList extends Component {
    static defaultProps = {
        comments: []
    };

    static propTypes = {
        comments: PropTypes.array,
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    };

    getBody = () => {
        const {comments, isOpen} = this.props;
        if (!isOpen) return null;
        if (!comments.length) return (
          <div>
            <p>No comments yet</p>
            <CommentForm/>
          </div>
        );
        return (
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
                <CommentForm/>
            </ul>
        );
    };

    render() {
        const text = this.props.isOpen ? "hide comments" : "show comments";
        return (
            <div>
                <button onClick={this.props.toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        );
    }
}

export default toggleOpen(CommentList);
