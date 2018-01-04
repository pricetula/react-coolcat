/* eslint-disable import/no-extraneous-dependencies */
import Promise from 'promise';
import axiosInstance from '../instance';

export const getUserData = token => new Promise(
  (
    resolve,
    reject,
  ) => {
    axiosInstance.get(
      '/todos',
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

