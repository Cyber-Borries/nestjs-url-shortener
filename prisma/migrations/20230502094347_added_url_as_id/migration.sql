/*
  Warnings:

  - The primary key for the `url` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "url" DROP CONSTRAINT "url_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "url_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "url_id_seq";
