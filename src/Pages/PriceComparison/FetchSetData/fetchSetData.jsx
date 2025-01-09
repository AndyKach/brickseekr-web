export const fetchSetData = async (setId) => {
  console.log(`Fetching data for set ID: ${setId}`);
  // Simulated API response with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "LEGO 77072 Peely Bone",
        id: setId,
        description:
          "LEGO 77072 Peely Bone is a 1,414 piece Fortnite exclusive set released in 2024. It features a detailed, buildable model of Peely Bone from Fortnite, a half-banana, half-skeleton design with movable arms.",
        year: 2024,
        weight: "1688 g",
        dimensions: "28 x 45.6 x 8.7 cm",
        age: "18+",
        pieces: 1414,
        bestDeal: "120€",
      });
    }, 1000); // Simulated delay
  });
};
