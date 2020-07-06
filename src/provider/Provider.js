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
}

export default new Provider();
