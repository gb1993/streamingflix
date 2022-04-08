const omdb = async (name) => {
    const url = `https://www.omdbapi.com/?t=${name}&apikey=f872a6ff`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export default omdb;