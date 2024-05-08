/*
  Warnings:

  - Changed the type of `releaseDate` on the `animes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "animes" DROP COLUMN "releaseDate",
ADD COLUMN     "releaseDate" VARCHAR(10) NOT NULL;
