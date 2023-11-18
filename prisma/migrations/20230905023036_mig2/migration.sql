/*
  Warnings:

  - The `emailVerificado` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "emailVerificado",
ADD COLUMN     "emailVerificado" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "website" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ValidationStatus" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "code" INTEGER NOT NULL,
    "tries" INTEGER NOT NULL,
    "timeoutCounter" INTEGER NOT NULL,

    CONSTRAINT "ValidationStatus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ValidationStatus_email_key" ON "ValidationStatus"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ValidationStatus_userID_key" ON "ValidationStatus"("userID");
