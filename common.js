// Funciona con "/api" (mock local) ou coa URL absoluta /exec de Apps Script.
// GET: fetch simple (segue a redirección a googleusercontent). POST: corpo string sen cabeceiras propias
// => Content-Type text/plain;charset=UTF-8 (petición "simple", sen preflight CORS).
const API={
  async get(params){const u=new URL(window.API_URL,location.href);Object.entries(params).forEach(([k,v])=>u.searchParams.set(k,v));
    const r=await fetch(u.toString(),{method:'GET',redirect:'follow'});return r.json();},
  async post(body){const r=await fetch(window.API_URL,{method:'POST',redirect:'follow',body:JSON.stringify(body)});return r.json();}
};
