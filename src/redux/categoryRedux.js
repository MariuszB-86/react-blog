import shortid from 'shortid';

//selectors

export const getAllCategories = state => state.categories;

// actions
const createActionName = actionName => `app/category/${actionName}`;

// action creators

const categoryReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
    return statePart;
  };
};

export default categoryReducer;