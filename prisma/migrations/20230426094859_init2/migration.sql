/*
  Warnings:

  - You are about to drop the column `longUrl` on the `url` table. All the data in the column will be lost.
  - Added the required column `originalUrl` to the `url` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "url" DROP COLUMN "longUrl",
ADD COLUMN     "originalUrl" TEXT NOT NULL;
