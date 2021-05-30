import axios from 'axios';
import { ITEM, LOADING, ERROR } from '../types/itemTypes';

const getItem = async () => {
  const loadItem = await axios.get('https://fakestoreapi.com/products');
  return ({
    type: ITEM,
    payload: loadItem.data,
  });
};

export default getItem;
