import { toast } from "react-hot-toast";

export async function postFetch(url, dataToSend) {
  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });
    // console.log('resp ===', resp);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log("catch block error", error);
    toast.error(error);
  }
}
export async function postListing(url, dataToSend, token) {
  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: dataToSend,
    });
    console.log(dataToSend);
    // console.log('resp ===', resp);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log("catch block error", error);
    toast.error(error);
  }
}
export async function getFetch(url) {
  try {
    const resp = await fetch(url);
    // console.log('resp ===', resp);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log("catch block error", error);
    toast.error(error);
  }
}
export async function getFetchAuth(url, token) {
  try {
    const resp = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log('resp ===', resp);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log("catch block error", error);
    toast.error(error);
  }
}
