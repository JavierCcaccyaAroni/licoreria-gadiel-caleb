const baseUrl = "https://653a624b2e42fd0d54d3c8f7.mockapi.io/";

// convertirmos en objeto los parametros, para pasar la información
export async function makeHttpRequest({url, id, body, method = "GET"}) {

  // operador ternario
  const finalUrl = id ? `${url}/${id}`: url;

  const response = await fetch(`${baseUrl}${finalUrl}`, {
    method,
    headers : {
      "Content-Type": "application/json", 
    },
    body : JSON.stringify(body),
  });

  const data = await response.json();
  return data;
}