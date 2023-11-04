import { makeHttpRequest } from "./config";

// las funciones para el CRUD

export async function create(body, url) {
  return await makeHttpRequest({ url, body, method: "POST" });
}

export async function read(url) {
  return await makeHttpRequest({ url });
}

export async function update (id, body, url) {
  return await makeHttpRequest({ url, id, body, method: "PUT" });
}

export async function destroy(id, url) {
  return await makeHttpRequest({ url, id, method:"DELETE" });
}