function createSearchParamsString(data) {
    const params = new URLSearchParams();

    for (const key in data) {
        const value = data[key];
        params.append(key, value);
    }

    return params.toString();
}

class SearchService {
    #url = "https://rickandmortyapi.com/api/character";

    async search(value) {
        try {
            const params = createSearchParamsString( { name: value, status: "alive" });
            const response = await fetch(`${this.#url}/?${params}`);
            if (response.ok) {
                const data = await response.json();
                return data.results;
            }
            return null;
        } catch (error) {
            return Promise.reject(new Error("Error sending request"));
        }
    }
}
