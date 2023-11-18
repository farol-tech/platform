/*
  Warnings:

  - A unique constraint covering the columns `[cnpj]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cnpj` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `website` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "cnpj" TEXT NOT NULL,
ADD COLUMN     "endereco" TEXT NOT NULL,
ADD COLUMN     "estado" TEXT NOT NULL,
ADD COLUMN     "website" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_cnpj_key" ON "User"("cnpj");
