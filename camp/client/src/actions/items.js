import * as api from '../api/index.js';
import { FETCH_ALL,FETCH_BY_CREATOR,COMMENT,FETCH_POST, CREATE, UPDATE, DELETE, LIKE,START_LOADING,FETCH_BY_SEARCH,END_LOADING } from '../constants/actionTypes';


export const getItem = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchItem(id);

    dispatch({ type: FETCH_POST, payload: { item: data } });
  } catch (error) {
    console.log(error);
  }
};


export const getItemsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchItemsBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
    dispatch({ type: END_LOADING });
    console.log(data)
  } catch (error) {
    console.log(error);
  }
};


export const getItems = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data, currentPage, numberOfPages } } = await api.fetchItems(page);

    dispatch({ type: FETCH_ALL, payload: { data, currentPage, numberOfPages } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const getItemsByCreator = (name) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchItemsByCreator(name);

    dispatch({ type: FETCH_BY_CREATOR, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createItem = (item,history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createItem(item);

    dispatch({ type: CREATE, payload: data });

    history.push(`/items/${data._id}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateItem = (id, item) => async (dispatch) => {
  try {
    const { data } = await api.updateItem(id, item);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likeItem = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeItem(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const commentItem = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.commentItem(value, id);

    dispatch({ type: COMMENT, payload: data });

    return data.comments;
  } catch (error) {
    console.log(error);
  }
};

export const deleteItem = (id) => async (dispatch) => {
  try {
    await api.deleteItem(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};