import { config } from "../config";

class BoredomAPI {
  constructor() {
    this.host = config.bored_api_url;
  }

  getActivities = async (filters) => {
    try {
      const res = await fetch(`${this.host}/api/activity`);
      const data = res.json();
      return data;
    } catch (error) {
      console.log("Error in fetching data");
    }
  };
}

export default new BoredomAPI();
