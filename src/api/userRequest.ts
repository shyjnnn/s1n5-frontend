import { postRequest } from './common.api';

const postUserId = async (): Promise<{ id: string } | Error> => {
  try {
    const response = await postRequest<{ id: string }>('/user');
    if (response instanceof Error) {
      return response;
    }
    return { id: response.id }; // Fix: Return an object with the property 'id' from the 'response' object.
  } catch (error) {
    return error as Error;
  }
};
export default postUserId;
