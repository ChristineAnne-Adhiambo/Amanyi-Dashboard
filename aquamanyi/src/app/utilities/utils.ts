
export const getUser = async () => {
  const url = './api/users';
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result
  }
  catch (error: any) {
    return error.message
  }
}


export const createUser = async (userdata: UsersData) => {
  const url = '/api/register';
  try {
    const response = await fetch(url, {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify(userdata),
    });
    if(!response.ok){
      let error = await response.text()
      return{error}
    }
    const result = await response.json();
    return result;
  } catch (error: any) {

    return {error:error.message};
  }
};


export const loginUser = async (loginData: LoginData) => {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });
    if(!response.ok){
      let error = await response.text()
      return{error}
    }
    const result = await response.json();
    return result
  } catch (error: any) {
    return {error:error.message};
  }
};








