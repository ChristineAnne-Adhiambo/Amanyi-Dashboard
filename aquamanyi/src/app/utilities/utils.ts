export const getUser= async()=>{
    const url = './api/login';
    try{
        const response = await fetch(url);
        const result = await response.json();
        return result
    }
    catch(error:any){
        return error.message
    }
}