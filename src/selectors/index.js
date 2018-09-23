import {createSelector} from 'reselect';

const filtersGetter = (state) => {
    return state.filters;
};

const articlesGetter = (state) => {
    return state.articles;
};

const commentsGetter = (state) => {
    return state.comments;
};

const idGetter = (state, props) => {
    return props.id;
};

export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters;

    return articles.filter((article) => {
        const published = Date.parse(article.date);
        return (!selected.length || selected.some((selectedArticle) => selectedArticle.value === article.id)) && 
            (!from || !to || (published > from && published < to))
    });
});

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    return comments[id];
});