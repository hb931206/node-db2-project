exports.up = async function (knex) {
  await knex.schema.createTable("cars", (table) => {
    // table.integer("id").notnull().unique().primary()
    table.increments("id");
    table.real("vinNumber").notNull();
    table.text("make").notNull();
    table.text("model").notNull();
    table.real("mileage");
    table.text("transmissionType");
    table.text("statusOfTitle");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("cars");
};
