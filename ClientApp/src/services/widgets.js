import axios from 'axios';

const baseURL = '/api/widgets';

const getCollectionURL = () => {
  return baseURL;
};

export const refreshWidgets = () => {
  return axios
    .get(getCollectionURL())
    .then(({ data: widgets }) => widgets);
};

export const appendWidget = (widget) => {
  return axios
    .post(getCollectionURL(), widget)
    .then(({ data: widget }) => widget);
};