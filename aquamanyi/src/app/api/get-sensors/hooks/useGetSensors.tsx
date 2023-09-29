// import { getPosts } from "../utilities/utils";
// import { useEffect,useState } from "react";


// interface PostsData{

//   id: number;
//   serial_number: string;
//   location: string
//   sensor_type: string
//   data_sent_time: string
//   created_at: string
//   updated_at: string
  

// }
// const useGetSensors=()=>{
//     const [posts, setPosts]=useState<PostsData[]>([]);
//     useEffect(()=>{
//       (async()=>{
//         const posts=await getPosts();
//         setPosts(posts);
//       })();
//     },[])
//     return {posts}
// }
// export default useGetSensors;

import { useEffect, useState } from "react";
import { getSensors } from "../../../utilities/utils";

interface Sensors {

  id: number;
  serial_number: string;
  location: string;
  sensor_type: string;
  data_sent_time: string;
  created_at: string;
  updated_at: string;

  }
    
  const useGetSensors = () => {

  const [sensors, setProducts] = useState<Sensors[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const products = await getSensors();
        console.log({products:sensors})
        setProducts(products);
      } catch (error) {
        console.error("Failed to fetch sensors:", error);
      }
    })();
  }, []);  
  return { sensors };
};
export default useGetSensors;