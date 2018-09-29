import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filtratedArticlesSelector} from '../selectors';
import {loadAllArticles} from '../AC';
import Loader from './Loader';
import {NavLink} from 'react-router-dom';

class ArticleList extends Component {
    static propTypes = {
        //from connect (store)
        articles: PropTypes.array.isRequired, //массив статей
        //from accordion
        openItemId: PropTypes.string, //id открытого элемента (статьи)
        toggleOpenItem: PropTypes.func //функция декоратора Accordion открытие/закрытие статьи
    }

    componentDidMount () {
        const {loaded, loading, loadAllArticles} = this.props;
        if (!loaded && !loading) {
            loadAllArticles();
        }
    }

    render () {
        const {articles, loading} = this.props;
        if (loading) {
            return <Loader/>;
        }
        const articleElements = articles.map((article) => {
            return <li key = {article.id}>
                        <NavLink to = {`/articles/${article.id}`} activeStyle = {{color: 'red'}}>
                            {article.title}
                        </NavLink>
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
        articles: filtratedArticlesSelector(state),
        loading: state.articles.loading,
        loaded: state.articles.loaded
    };
}, {loadAllArticles: loadAllArticles});

export default decorator(ArticleList);