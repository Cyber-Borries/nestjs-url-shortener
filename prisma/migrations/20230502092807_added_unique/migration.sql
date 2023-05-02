/*
  Warnings:

  - A unique constraint covering the columns `[originalUrl]` on the table `url` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "url_originalUrl_key" ON "url"("originalUrl");
