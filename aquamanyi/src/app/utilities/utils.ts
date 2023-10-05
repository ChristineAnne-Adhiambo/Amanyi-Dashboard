export const getSensors = async () => {
    const url = `/api/get-sensors`
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      return result;
    }
     catch (error:any) {
      throw new Error(error.message);
    }
  };

  