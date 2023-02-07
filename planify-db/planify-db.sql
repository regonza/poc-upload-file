CREATE SCHEMA "planify";

CREATE TABLE "planify"."flight_plan" (
  "id" int PRIMARY KEY,
  "aircraft_id" int,
  "flight_rule" int,
  "flight_type" int,
  "wake_turbulence_cat" varchar,
  "equipment" varchar,
  "departure_aerodrome" int,
  "time" time,
  "cruising_speed" varchar,
  "level" varchar,
  "route" varchar,
  "destination_aerodrome" int,
  "total_eet" time,
  "alternative_aerodrome" int,
  "second_alternative_aerodrome" int,
  "other_information" varchar,
  "endurance" time,
  "persons_on_board" int
);

CREATE TABLE "planify"."flight_rule" (
  "id" int PRIMARY KEY,
  "description" varchar
);

CREATE TABLE "planify"."flight_type" (
  "id" int PRIMARY KEY,
  "description" varchar
);

CREATE TABLE "planify"."aircraft" (
  "id" int PRIMARY KEY,
  "model" varchar,
  "number" int,
  "type" varchar
);

CREATE TABLE "planify"."aerodrome" (
  "id" int PRIMARY KEY,
  "name" varchar
);

ALTER TABLE "planify"."flight_plan" ADD FOREIGN KEY ("aircraft_id") REFERENCES "planify"."aircraft" ("id");

ALTER TABLE "planify"."flight_plan" ADD FOREIGN KEY ("flight_rule") REFERENCES "planify"."flight_rule" ("id");

ALTER TABLE "planify"."flight_plan" ADD FOREIGN KEY ("flight_type") REFERENCES "planify"."flight_type" ("id");

ALTER TABLE "planify"."flight_plan" ADD FOREIGN KEY ("destination_aerodrome") REFERENCES "planify"."aerodrome" ("id");

ALTER TABLE "planify"."flight_plan" ADD FOREIGN KEY ("alternative_aerodrome") REFERENCES "planify"."aerodrome" ("id");

ALTER TABLE "planify"."flight_plan" ADD FOREIGN KEY ("second_alternative_aerodrome") REFERENCES "planify"."aerodrome" ("id");
