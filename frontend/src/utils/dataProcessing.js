
export const ensureArray = (value) => {
    if (Array.isArray(value)) return value;
    if (typeof value === 'string') return value.split(',').map(item => item.trim());
    return [];
  };
  
  export const processData = (items) => {
    return items.map(item => ({
      ...item,
      genres: ensureArray(item.genres),
      region: ensureArray(item.region),
      location: ensureArray(item.location),

    }));
  };
  