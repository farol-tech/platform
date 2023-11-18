-- CreateTable
CREATE TABLE "Modelo" (
    "id" TEXT NOT NULL,
    "nome_modelo" TEXT NOT NULL,
    "id_produto" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,

    CONSTRAINT "Modelo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Previsao" (
    "id" TEXT NOT NULL,
    "nome_modelo" TEXT NOT NULL,
    "id_modelo" TEXT NOT NULL,
    "id_produto" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,
    "data_previsao" TIMESTAMP(3) NOT NULL,
    "data_feito" TIMESTAMP(3) NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Previsao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,
    "nome_produto" TEXT NOT NULL,
    "id_unidade" TEXT NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventario" (
    "id" TEXT NOT NULL,
    "id_modelo" TEXT NOT NULL,
    "id_produto" TEXT NOT NULL,
    "data_previsao" TIMESTAMP(3) NOT NULL,
    "data_feito" TIMESTAMP(3) NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Inventario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unidade" (
    "id" TEXT NOT NULL,
    "nome_unidade" TEXT NOT NULL,

    CONSTRAINT "Unidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resposta" (
    "id" TEXT NOT NULL,
    "id_pergunta_questionario" TEXT NOT NULL,
    "id_usuario" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Resposta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pergunta_Questionario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "enunciado" TEXT NOT NULL,
    "tipo_pergunta" TEXT NOT NULL,
    "pagina" INTEGER NOT NULL,
    "id_questionario" TEXT NOT NULL,

    CONSTRAINT "Pergunta_Questionario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Questionario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "quantidade_perguntas" INTEGER NOT NULL,
    "id_questionario" TEXT NOT NULL,

    CONSTRAINT "Questionario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Opcoes_Pergunta" (
    "id" TEXT NOT NULL,
    "posicao" INTEGER NOT NULL,
    "enunciado" TEXT NOT NULL,
    "id_pergunta_questionario" TEXT NOT NULL,

    CONSTRAINT "Opcoes_Pergunta_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Modelo" ADD CONSTRAINT "Modelo_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Modelo" ADD CONSTRAINT "Modelo_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "Produto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Previsao" ADD CONSTRAINT "Previsao_id_modelo_fkey" FOREIGN KEY ("id_modelo") REFERENCES "Modelo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Previsao" ADD CONSTRAINT "Previsao_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "Produto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Previsao" ADD CONSTRAINT "Previsao_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_id_unidade_fkey" FOREIGN KEY ("id_unidade") REFERENCES "Unidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "Produto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_id_modelo_fkey" FOREIGN KEY ("id_modelo") REFERENCES "Modelo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resposta" ADD CONSTRAINT "Resposta_id_pergunta_questionario_fkey" FOREIGN KEY ("id_pergunta_questionario") REFERENCES "Pergunta_Questionario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resposta" ADD CONSTRAINT "Resposta_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pergunta_Questionario" ADD CONSTRAINT "Pergunta_Questionario_id_questionario_fkey" FOREIGN KEY ("id_questionario") REFERENCES "Questionario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Opcoes_Pergunta" ADD CONSTRAINT "Opcoes_Pergunta_id_pergunta_questionario_fkey" FOREIGN KEY ("id_pergunta_questionario") REFERENCES "Pergunta_Questionario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
