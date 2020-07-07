import axios from 'axios';
import config from './config';

class Provider {
	constructor() {
		this.axios = null;
		this.config = config;
		this.configAxios();
	}
	configAxios() {
		this.axios = axios.create({
			...this.config,
		});
	}
	async get(url) {
		return await this.axios.get(url);
  }

  async post(url, params){
    return await this.axios.post(url, {...params})
  }
}

export default new Provider();
