import { log } from "console";
import { BASE_URL } from "../../../../config";

export async function POST(request: Request) {
  try {
  
    const body = await request.json()
    console.log(body);
    

    const result = await fetch(`${BASE_URL}/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(body)
    });
    const post = await result.json();
    console.log(post);
    
    return new Response((post), {
      status: 201,
      statusText: "Success",
    });
  } catch (error: any) {
    return new Response(error.message, {
      status: 500,
      statusText: error.message || 'Failed to log in'
    });
  }
}







