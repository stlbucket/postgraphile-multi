drop schema schema_one cascade;
create schema schema_one;

drop schema schema_two cascade;
create schema schema_two;

------------------------------------------------
-- table_one
------------------------------------------------
CREATE TABLE schema_one.table_one (
  id serial,
  data text,
  CONSTRAINT pk_pde_table_one PRIMARY KEY (id)
);

------------------------------------------------
-- table_two
------------------------------------------------
CREATE TABLE schema_two.table_two (
  id serial,
  data text,
  CONSTRAINT pk_pde_table_two PRIMARY KEY (id)
);
