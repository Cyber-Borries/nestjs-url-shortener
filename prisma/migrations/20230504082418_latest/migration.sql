-- CreateTable
CREATE TABLE "url" (
    "id" SERIAL NOT NULL,
    "originalUrl" TEXT NOT NULL,
    "shortUrl" TEXT NOT NULL,

    CONSTRAINT "url_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "url_originalUrl_key" ON "url"("originalUrl");
