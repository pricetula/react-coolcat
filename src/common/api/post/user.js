/* eslint-disable import/no-extraneous-dependencies */
import Promise from 'promise';
import axiosInstance from '../instance';

export const postUserSignin = (
  {
    email,
    password,
  },
) => new Promise(
  (
    resolve,
    reject,
  ) => {
    axiosInstance.post(
      '/user/signin',
      {
        email,
        password,
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

export const postUserSignup = (
  {
    firstName,
    lastName,
    email,
    password,
  },
) => new Promise(
  (
    resolve,
    reject,
  ) => {
    axiosInstance.post(
      '/user/signup',
      {
        firstName,
        lastName,
        email,
        password,
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
