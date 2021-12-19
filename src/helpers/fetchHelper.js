import { toast } from "react-hot-toast";

const url = process.env.REACT_APP_URL_NEW;

export async function postFetch(urlEnd, dataToSend) {
  try {
    const resp = await fetch(url + urlEnd, {
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
    // console.log("catch block error", error);
    toast.error(error);
  }
}
export async function postListing(urlEnd, dataToSend, token) {
  try {
    const resp = await fetch(url + urlEnd, {
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
    // console.log("catch block error", error);
    toast.error(error);
  }
}
export async function getFetch(urlEnd) {
  try {
    const resp = await fetch(url + urlEnd);
    // console.log('resp ===', resp);
    const data = await resp.json();
    return data;
  } catch (error) {
    // console.log("catch block error", error);
    toast.error(error);
  }
}
export async function getFetchAuth(urlEnd, token) {
  try {
    const resp = await fetch(url + urlEnd, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log('resp ===', resp);
    const data = await resp.json();
    return data;
  } catch (error) {
    // console.log("catch block error", error);
    toast.error(error);
  }
}
export async function deleteListingFetch(urlEnd, token) {
  try {
    const resp = await fetch(url + urlEnd, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log('resp ===', resp);
    const data = await resp.json();
    return data;
  } catch (error) {
    // console.log("catch block error", error);
    toast.error(error);
  }
}
