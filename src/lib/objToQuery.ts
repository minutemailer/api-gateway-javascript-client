const objToQuery = (obj: Object, exclude: string[] = [], parent: string|null = null) => {
    const query: string[] = [];

    Object.entries(obj).forEach(([key, value]) => {
        if (exclude.indexOf(key) > -1) {
            return;
        }

        const queryKey = (parent) ? `${parent}[${key}]` : key;

        if (Array.isArray(value)) {
            value.forEach((subValue) => query.push(`${queryKey}[]=${subValue}`));
        } else if (typeof value === 'object' && value !== null) {
            query.push(objToQuery(value, exclude, queryKey));
        } else {
            query.push(`${queryKey}=${value}`);
        }
    });

    return query.join('&');
};

export default (obj: Object, exclude?: string[]) => objToQuery(obj, exclude);
