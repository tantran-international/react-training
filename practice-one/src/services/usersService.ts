import axios from 'axios';

/* Helpers */
import { generateRandomColor } from '@/helpers/randoms';

/* Constants */
import { USER_URL, BASE_URL } from '@/constants/urls';
import { IData } from '@/types/IUsers';

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

export const addUser = async (fullName: string) => {
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
      lastVisitedDate: null,
      details: '',
      bgColor: generateRandomColor()
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

export const updateUser = async (dataItem: IData) => {
  try {
    const { data, status } = await axios.put(`${USER_URL}/${dataItem.id}`, {
      id: dataItem.id,
      avatar: dataItem.avatar,
      fullName: dataItem.fullName,
      email: dataItem.email,
      isActive: dataItem.isActive,
      registeredDate: dataItem.registeredDate,
      lastVisitedDate: dataItem.lastVisitedDate,
      details: dataItem.details,
      bgColor: dataItem.bgColor
    });
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

export const deleteUser = async (dataId: string) => {
  try {
    const { status } = await axios.delete(`${USER_URL}/${dataId}`);
    if (status === 200) {
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
