//reducer управляющий бизнес логикой комментариев
import {} from '../constants';
import {normalizedComments as defaultComments} from '../fixtures';

export default (commentsState = defaultComments, action) => {
    const {type, payload} = action;

    switch (type) {
    }

    return commentsState;
}