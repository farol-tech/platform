/*
  Warnings:

  - You are about to drop the `Opcoes_Pergunta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pergunta_Questionario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Questionario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Resposta` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Opcoes_Pergunta" DROP CONSTRAINT "Opcoes_Pergunta_id_pergunta_questionario_fkey";

-- DropForeignKey
ALTER TABLE "Pergunta_Questionario" DROP CONSTRAINT "Pergunta_Questionario_id_questionario_fkey";

-- DropForeignKey
ALTER TABLE "Resposta" DROP CONSTRAINT "Resposta_id_pergunta_questionario_fkey";

-- DropForeignKey
ALTER TABLE "Resposta" DROP CONSTRAINT "Resposta_id_usuario_fkey";

-- DropTable
DROP TABLE "Opcoes_Pergunta";

-- DropTable
DROP TABLE "Pergunta_Questionario";

-- DropTable
DROP TABLE "Questionario";

-- DropTable
DROP TABLE "Resposta";

-- CreateTable
CREATE TABLE "Forms" (
    "id" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,
    "resp1" TEXT NOT NULL,
    "resp2" TEXT NOT NULL,
    "resp4" TEXT NOT NULL,
    "resp5" TEXT NOT NULL,
    "resp6" TEXT NOT NULL,

    CONSTRAINT "Forms_pkey" PRIMARY KEY ("id")
);
