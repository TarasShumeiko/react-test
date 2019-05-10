import React, {Component} from 'react';
import Comment from './Comment';
import AddComment from './AddComment';
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
            <AddComment/>
          </div>
        );
        return (
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
                <AddComment/>
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
