import React, {Component} from 'react';
import Article from './Article';
import accordion from '../decorators/accordion';
import PropTypes from 'prop-types';

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired, //массив статей
        //from accordion
        openItemId: PropTypes.string, //id открытого элемента (статьи)
        toggleOpenItem: PropTypes.func.isRequired //функция декоратора Accordion открытие/закрытие статьи
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

export default accordion(ArticleList);