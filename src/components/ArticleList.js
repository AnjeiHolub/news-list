import React, {Component} from 'react';
import Article from './Article';
import accordion from '../decorators/accordion';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filtratedArticlesSelector} from '../selectors';
import {loadAllArticles} from '../AC';

class ArticleList extends Component {
    static propTypes = {
        //from connect (store)
        articles: PropTypes.array.isRequired, //массив статей
        //from accordion
        openItemId: PropTypes.string, //id открытого элемента (статьи)
        toggleOpenItem: PropTypes.func.isRequired //функция декоратора Accordion открытие/закрытие статьи
    }

    componentDidMount () {
        this.props.loadAllArticles();
    }

    render () {
        const {articles, toggleOpenItem, openItemId} = this.props;

        const articleElements = articles.map((article) => {
            return <li key = {article.id}>
                        <Article 
                            article = {article}
                            isOpen = {article.id === openItemId}
                            toggleOpen = {toggleOpenItem.bind(this, article.id)}
                        />
                    </li> 
        });

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

const decorator = connect((state) => {
    return {
        articles: filtratedArticlesSelector(state)
    };
}, {loadAllArticles: loadAllArticles});

export default decorator(accordion(ArticleList));