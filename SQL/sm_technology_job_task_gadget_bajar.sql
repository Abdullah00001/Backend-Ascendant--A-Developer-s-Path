INSERT INTO "User" (id, name, email, role, password,"accountStatus")
VALUES (
  '5f3ba661-6305-4317-817c-2803ac441dd1',
  'Admin',
  'admin@gadgetbajar.com',
  'ADMIN',
  '$2a$10$cum/g5wjMzSLH2JHK.f04eGcbtsn4TAAgIDLx8n9.HjivMRDUuHl6',
  true
);

SELECT *
FROM "User";

SELECT *
FROM "Order"

DELETE FROM "User"
WHERE id='743acb3b-c6de-49a5-a422-e327cac41765';

DROP TABLE "Order";
DROP TABLE "User";
DROP TABLE "_prisma_migrations";
DROP SCHEMA public;