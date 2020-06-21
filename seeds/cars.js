exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert([
    {
      vinNumber: 3450433,
      make: "Tesla",
      model: "Model S",
      mileage: 454.45,
      transmissionType: "Okay",
      statusOfTitle: "Good Standing",
    },
    {
      vinNumber: 43430400440,
      make: "Ford",
      model: "Focus",
      mileage: 2001,
      transmissionType: "Terrible",
      statusOfTitle: "Bad Standing",
    },
  ]);
};
