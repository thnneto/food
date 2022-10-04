import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 2N1z4lf5LuCRY8PEBkww075FujMRs289JMUn1YP5oNrKclTFWdn-j6iil_Da35prB3_vdYm0qJ-5QPBSavNmmKdqLgrBDSPBhYQI3pff20XAwVUdiSdD0oQR2BgmY3Yx",
  },
});
