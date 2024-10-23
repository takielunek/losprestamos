import axios from "axios";
import sha256 from "crypto-js/sha256";

async function dataSender(formData) {
 const url = import.meta.env.VITE_API_URL;
 const apiKey = import.meta.env.VITE_API_KEY;


  const config = {
    method: "post",
    url: url,
    headers: {
      "Content-Type": "application/json",
      "Api-Key": apiKey,
    },
    data: formData,
  };

  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));

    const applicationHash = sha256(JSON.stringify(response.data)).toString();
    console.log("Application Hash:", applicationHash);

    return applicationHash;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default dataSender;
