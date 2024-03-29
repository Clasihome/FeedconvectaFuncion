export default (filters) => {
  const base = 'https://wsnzm.clasihome.com:3443/api/conv/properties?';
  filters.typeId = filters.user ? "user" : "office";
  filters.status = "PUBLICADA";
  filters.limit = 6;
  let url = base;
  let i = 0;
  for(let key in filters){
    i++;
    const more = i !== 1 ? '&' : ''; 
    url = url + more + `${key}=${filters[key]}`;
  }
  return url;
}