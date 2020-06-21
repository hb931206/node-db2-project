exports.up = async function (knex) {
  await knex.schema.createTable("cars", (table) => {
    // table.integer("id").notnull().unique().primary()
    table.increments("id");
    table.real("Vin Number").notNull();
    table.text("Make").notNull();
    table.text("Model").notNull();
    table.real("Mileage");
    table.text("Transmission Type");
    table.text("Status of Title");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("cars");
};
