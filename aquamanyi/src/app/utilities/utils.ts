
// export const useGetSensors = async()=>{
//     const url = '/api/sensors/';

//     try{
//         const response = await fetch(url);
//         const result = await response.json();
//         return result
//     }
//     catch(error:any){
//         return error.message
//     }

// }

// export const useGetSensors = async()=>{
//     const url = './api/sensors'; 
    
//     try{
//         const response = await fetch(url);
//         const result = await response.json();
//         return result
//     }
//     catch(error:any){
//         return error.message
//     }}
//     // export const getUser= async()=>{
//     // const url = './api/get-users';    try{
//     //     const response = await fetch(url);
//     //     const result = await response.json();
//     //     return result
//     // }
//     // catch(error:any){
//     //     return error.message
//     // }}
    
//     // export const getTemp= async()=>{
//     // const url = './api/get-temp'; 
//     // try{
//     //     const response = await fetch (url);
//     //     const result = await response.json();
//     //     return result
//     // }
//     // catch(error:any){
//     //     return error.message    
//     // }}


export const getSensors = async () => {
    const url = `./api/get-sensors`
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      return result;
    } catch (error:any) {
      throw new Error(error.message || 'Failed to fetch sensors');
    }
  };