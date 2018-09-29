import {createSelector} from 'reselect';
import {mapToArray} from '../helpers';


const filtersGetter = (state) => {
    return state.filters;
};

const articlesGetter = (state) => {
    return state.articles.entities;
};

const commentsGetter = (state) => {
    return state.comments.entities;
};

const idGetter = (state, props) => {
    return props.id;
};

export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters;

    return mapToArray(articles).filter((article) => { //к нам приходит объект поэтому фильтруем по массиву наших id (Object.keys) которые принодлежат списку выбранных статей selected
        const published = Date.parse(article.date);

        const selectState = selected.some((selectedArticle) => { //присутствует ли статья в выбранных
            return selectedArticle.value === article.id;
        });

        if (!selected.length || selectState) { //не пусто ли список и константа selectState
            if (from && to) {  //выбраны ли даты
                if (published > from && upblished < to) { //помещается ли дата публикации статьи в выбранном периоде на календаре
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        } else {
            return false;
        }
    });
});

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    return comments.get(id);
});