import axios from 'axios';
const API_KEY = 'RseerSqiASQhSVnR7J0BZvw5guzPRQe5JFEVSVby';

class API {
  static _instance;
  static solnum;
  constructor() {
    if (!API._instance) {
      API._instance = axios.create({
        baseURL: 'https://api.nasa.gov',
        headers: {
          common: {
            'Content-Type': 'application/json',
          },
        },
      });
    }
  }

  async getAPOD() {
    try {
      const response = await API._instance.get(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
      );
      return Promise.resolve(response.data);
    } catch (err) {
      console.log(err);
      return Promise.reject('connection_error');
    }
  }

  async getMarsPhotos(sol) {
    try {
      const response = await API._instance.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=navcam&api_key=${API_KEY}`
      );
      return Promise.resolve(response.data);
    } catch (err) {
      console.log(err);
      return Promise.reject('connection_error');
    }
  }
}

export default new API();
