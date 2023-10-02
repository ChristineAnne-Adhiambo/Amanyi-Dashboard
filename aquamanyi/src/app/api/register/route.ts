import { error, log } from "console";
import { BASE_URL } from "../../../../config";
import { NextResponse } from "next/server";
import  axios from 'axios'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = await axios.post(`${BASE_URL}/user/`,JSON.stringify(body), {
   
      headers: {
        "Content-Type": "application/json",
      },  
    }). catch(error =>{
      console.log(error)
      if(error?.response?.data && Object.keys(error?.response?.data)?.length > 0){
        throw new Error(error.response.data[Object.keys(error?.response?.data)[0]])

      } else{
        throw new Error("Failed to register")
      } 
    })
     
    console.log(result)
    
    return new NextResponse((result.data), {
      status: 201,
      statusText: "Success",
    });
  } catch (error: any) {
    return new NextResponse(error.message, {
      status:500,
      statusText:'Failed'
    });
  }
}







