export const get = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

export const post = async (url, body) => {
    const response = await fetch(url, body);
    return await response.json();
};
