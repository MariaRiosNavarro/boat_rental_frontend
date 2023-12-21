//  General Get Fetch Funktion

export const fetchAsync = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const responseData = await response.json();
    console.log("Response Data:", responseData); // Log the entire response object
    const { data, message } = responseData;
    return { data, message };
  } catch (error) {
    console.log("Fetch Error: ", error.message);
    throw new Error("An error occurred during the fetch operation");
  }
};
