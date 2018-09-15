import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import toggleOpen from '../decorators/toggleOpen';

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool, //параметр открыта/закрыта статья
        toggleOpen: PropTypes.func //функция декоратора Accordion открытие/закрытие статьи
    }

    /*
    shouldComponentUpdate (nextProps, nextState) {
        //return true - позволяет обновить элемент, return false - запрещает обновить элемент
        return nextProps.isOpen !== this.props.isOpen //если isOpen не поменялся, не обновляй элемент
    }
    */

    render () {
        const {article, isOpen, toggleOpen} = this.props;

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody = () => {
        const {isOpen} = this.props;
        if (!isOpen) return null;
        const {article} = this.props;
        return (<div>
                    <section>{article.text}</section>
                    <CommentList comments = {article.comments} />
                </div>);
    }
}

export default Article;