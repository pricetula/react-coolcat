/* eslint-disable import/no-extraneous-dependencies */
import Promise from 'promise';
import axiosInstance from '../instance';

export default function (
  {
    firstName,
    lastName,
    email,
    password
  }
) {
  return new Promise(
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
        }
      )
        .then(
          resolve,
        )
        .catch(
          reject,
        );
    }
  );
}
