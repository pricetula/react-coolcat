/* eslint-disable import/no-extraneous-dependencies */
import Promise from 'promise';
import axiosInstance from '../instance';

export const postAddTodo = (
  {
    item,
    description,
    dueDate,
    startDate,
    localId,
  },
  token,
) => new Promise(
  (
    resolve,
    reject,
  ) => {
    axiosInstance.post(
      '/todos',
      {
        item,
        description,
        dueDate,
        startDate,
        localId,
      },
      {
        headers: {
          Authorization: token,
        },
      },
    )
      .then(
        resolve,
      )
      .catch(
        reject,
      );
  },
);

export const base = (
) => null;
