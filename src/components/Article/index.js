import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentList from '../CommentList';
import {CSSTransition} from 'react-transition-group';
import './main.css';
import {connect} from 'react-redux';
import {articleDelete, loadArticle} from '../../AC';
import Loader from '../Loader';

class Article extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        isOpen: PropTypes.bool, //параметр открыта/закрыта статья
        toggleOpen: PropTypes.func, //функция декоратора Accordion открытие/закрытие статьи
        //from connect
        article: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string
        })
    }

    componentDidMount() {
        const {loadArticle, article, id} = this.props;
        if (!article || (!article.text && !article.loading)) {
            return loadArticle(id);
        }
    }

    /*
    shouldComponentUpdate (nextProps, nextState) {
        //return true - позволяет обновить элемент, return false - запрещает обновить элемент
        return nextProps.isOpen !== this.props.isOpen //если isOpen не поменялся, не обновляй элемент
    }
    */

    render () {
        const {article, isOpen, toggleOpen} = this.props;
        if (!article) {
            return null;
        }
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                <button onClick = {this.handleDelete}>Delete me</button>
                <CSSTransition
                    in = {isOpen}
                    classNames = "article"
                    timeout = {{ enter: 500, exit: 500 }}
                >
                    {this.getBody()}
                </CSSTransition>
            </div>
        )
    }

    getBody = () => {
        const {isOpen, article} = this.props;
        if (!isOpen) return (<div></div>);
        if (article.loading) {
            return <Loader/>;
        }
        return (<div>
                    <section>{article.text}</section>
                    <CommentList article = {article} />
                </div>);
    }

    handleDelete = () => {
        const {article} = this.props;
        this.props.articleDelete(article.id);
    }
}

const decorator = connect((state, ownProps) => {
    return {
        article: state.articles.entities.get(ownProps.id)
    };
}, {articleDelete: articleDelete, loadArticle: loadArticle});

export default decorator(Article);