// import { log } from "console";

// import { BASE_URL } from "../../../../config/config";


// export async function GET(request: Request) {
//   try {
//     const body = await request.json()
//     console.log(body);
    
//     const result = await fetch(`${BASE_URL}/sensors/`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body:JSON.stringify(body)
//     });
//     const get = await result.json();
//     console.log(get);
    
//     return new Response((get), {
//       status: 201,
//       statusText: "Success",
//     });
//   } catch (error: any) {
//     return new Response(error.message, {
//       status: 500,
//       statusText: error.message || 'Failed to log in'
//     });
//   }
// }






// import { BASE_URL } from "../../../../config/config";

// export async function GET(){
//     try{
//         if(!BASE_URL){
//             return new Response('BASE url not found' ,{
//                 status : 404,
//                 statusText:'failed'
//             })
//         }

//         const response= await fetch (`https://amanyi-backend-64c984796c62.herokuapp.com/api/sensors`)
//         const result = await response.json();
//         return new Response(JSON.stringify(result),{
//             status:200,
//             statusText:"success"
//         })

//     }
//     catch(error:any){
//         return new Response(error .message,{
//             status :500,
//             statusText:"failed"
//         })
        
//     }
// }


// import { BASE_URL } from "../../../../config/config";

// export async function GET() {
//     try {
//         if (!BASE_URL) {
//             return new Response('BASE URL not found', {
//                 status: 404,
//                 statusText: 'Not Found'
//             });
//         }

//         const response = await fetch(`${BASE_URL}/api/sensors`);
        
//         if (!response.ok) {
//             return new Response('Failed to fetch data', {
//                 status: response.status,
//                 statusText: response.statusText
//             });
//         }

//         const result = await response.json();

//         return new Response(JSON.stringify(result), {
//             status: 200,
//             statusText: 'OK'
//         });
//     } 


//     catch (error) {
//         console.error("An error occurred:", error); 
    
//         const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        
//         return new Response(JSON.stringify({
//             error: errorMessage
//         }), {
//             status: 500,
//             statusText: 'Internal Server Error',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//     }
// }


// import { BASE_URL } from "@/config";
// import { BASE_URL } from "../../../../config/config";

// export async function GET(){
//     try{
//         if(!BASE_URL){
//             return new Response('BASE url not found' ,{
//                 status : 404,
//                 statusText:'failed'
//             })
//         }
//         const response= await fetch (`${BASE_URL}/sensors/`)
//         const result = await response.json();
//         return new Response(JSON.stringify(result),{
//             status:200,
//             statusText:"success"
//         })    
//     }
//     catch(error:any){
//         return new Response(error .message,{
//             status :500,
//             statusText:"failed"
//         })    }
// }



// import { BASE_URL } from "../../../../config";
import { BASE_URL } from "../../../../config/config";

export async function GET() {
    try {
      if (!BASE_URL) {
        return new Response("BASE URL not found", {
          status: 404,
          statusText: "Failed",
        });
      }    const response = await fetch(`${BASE_URL}/api/sensors/`);
      if (!response.ok) {
        return new Response("Failed to fetch products", {
          status: 500,
          statusText: "Failed",
        });
      }   
      const result = await response.json();
      return new Response(JSON.stringify(result), {
        status: 200,
        statusText: "Success",
      });
    } catch (error: any) {
      return new Response(error.message, {
        status: 500,
        statusText: "Failed",
      });
    }
  }