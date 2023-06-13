import { defaultAttractions } from "../public/defaultData";
import axios from "axios";

// Get places by bounds receives the 'type', 'sw' object, 'ne'object and 'source' for effect cancellation as parameter for endpoint call
export const getPlacesByBounds = (type, sw, ne, source) => {
    // try {
    //     const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
    //       params: {
    //         bl_latitude: sw.lat,
    //         tr_latitude: ne.lat,
    //         bl_longitude: sw.lng,
    //         tr_longitude: ne.lng
    //       },
    //       headers: {
    //         'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    //         'X-RapidAPI-Key': '7113f37e8bmshbf0e592cb9617c8p1524dejsn3dae556f1d78'
    //       }
    //     }, { cancelToken: source.token });

    //     // Data is returned once resolved
    //     return data;

    // } catch (error) {
    //     // Error Handling
    //     if (axios.isCancel(error)) {
    //       console.log('axios Call Cancelled!');
    //     } else {
    //       throw error;
    //     }
    // }
    return defaultAttractions.data
}

// Get Places by Latitude and longitude, receives 'type', 'lat', 'lng', some 'params' and source for effect cleanup and error handling as parameter to endpoint call
export const getPlacesByLatLng = (type, lat, lng, params, source) => {
  // try {
  //   const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`, {
  //     params: {
  //       latitude: lat,
  //       longitude: lng,
  //       ...params
  //     },
  //     headers: {
  //       'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
  //       'X-RapidAPI-Key': '7113f37e8bmshbf0e592cb9617c8p1524dejsn3dae556f1d78'
  //     }
  //   }, { cancelToken: source.token });

  //   // Data is returned once resolved
  //   console.log(data);
  //   return data;
  // } catch (error) {
  //   if (axios.isCancel(error)){
  //     console.log('axios Call Cancelled!');
  //   } else {
  //     throw error
  //   }
  // }
  return defaultAttractions.data
}

// Get Place details RTCRtpReceiver, 'type', 'location_id' and 'source' as paramter to endpoint call
export const getPlaceDetails = (type, location_id, source) => {
  return defaultAttractions.data.find(p => p.location_id === location_id)
  
}

// Get Place Review received the 'location_id' and 'source' as paramters for endpoint call
export const getPlaceReviews = async (location_id, source) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/reviews/list`, {
      params: {
        location_id: location_id,
        limit: 20
      },
      headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': '7113f37e8bmshbf0e592cb9617c8p1524dejsn3dae556f1d78'
      }
    }, { cancelToken: source.token });

    // Data is returned once resolved
    return data;
  } catch (error) {
    if(axios.isCancel(error)) {
      console.log('axios Call Cancelled');
    } else {
      throw error;
    }
  }
}

// Search Place recieves 'location', some 'params' and 'source' as a parameters for endpoint call
export const searchPlaces = async (location, params, source) => {
  try {
    const { data: { data } } = await axios.get('https://travel-advisor.p.rapidapi.com/locations/search', {
      params: {
        query: location,
        ...params
      },
      headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': '7113f37e8bmshbf0e592cb9617c8p1524dejsn3dae556f1d78'
      }
    }, { cancelToken: source.token })

    // Data is returned once resolved
    return data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('axios Call Cancelled');
    } else {
      throw error;
    }
  }
}
