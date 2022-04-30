import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': 'b282611444mshf6d3d7d200605bap1f3182jsn2e233a2367e7'
    
    },
  });
    
  return data;
}

// headers: {
//   'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
//   'X-RapidAPI-Key': 'b282611444mshf6d3d7d200605bap1f3182jsn2e233a2367e7'
// }