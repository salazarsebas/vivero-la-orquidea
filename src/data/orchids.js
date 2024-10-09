import orchidsData from '/orchid.json';

export const orchids = Object.keys(orchidsData).map((key, index) => {
  const orchid = orchidsData[key];
  return {
    id: index + 1,
    name: orchid.name,
    image: orchid.image,
  };
});
