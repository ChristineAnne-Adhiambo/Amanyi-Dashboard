export const getTemp = async () => {
    try {
      const response = await fetch(`/api/get-temp`, {
        method: "GET",
      });
      const result = await response.json();
      return result;
    } catch (error:any) {
      return error.message
     
    }
  }