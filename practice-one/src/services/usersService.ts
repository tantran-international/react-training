import axios from 'axios';

import { USER_URL, BASE_URL } from '@/constaints/urls';

axios.defaults.baseURL = BASE_URL;

export const getUsers = async () => {
  try {
    const { data, status } = await axios.get(USER_URL);
    if (status === 200) {
      return {
        data,
        error: null
      };
    }
    return {
      data: null,
      error: 'Something went wrong'
    };
  } catch (error) {
    return {
      error,
      data: null
    };
  }
};

export const addUsers = async (fullName: string) => {
  try {
    const date = new Date();
    const currentDate = date.toString();
    const { status } = await axios.post(USER_URL, {
      id: currentDate,
      avatar: null,
      fullName: fullName,
      email: '',
      isActive: false,
      registeredDate: currentDate,
      lastVisitedDate: null
    });
    if (status === 201) {
      return {
        error: null
      };
    }
    return {
      error: 'Something went wrong'
    };
  } catch (error) {
    return {
      error
    };
  }
};
