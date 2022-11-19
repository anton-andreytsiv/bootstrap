/*
  Warnings:

  - You are about to drop the column `IdQuestion` on the `Answers` table. All the data in the column will be lost.
  - You are about to drop the column `Title` on the `Answers` table. All the data in the column will be lost.
  - You are about to drop the column `Title` on the `ListOfQuest` table. All the data in the column will be lost.
  - You are about to drop the column `IdList` on the `Questions` table. All the data in the column will be lost.
  - You are about to drop the column `Title` on the `Questions` table. All the data in the column will be lost.
  - Added the required column `idQuestion` to the `Answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `ListOfQuest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idList` to the `Questions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Questions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Answers" DROP CONSTRAINT "Answers_IdQuestion_fkey";

-- DropForeignKey
ALTER TABLE "Questions" DROP CONSTRAINT "Questions_IdList_fkey";

-- AlterTable
ALTER TABLE "Answers" DROP COLUMN "IdQuestion",
DROP COLUMN "Title",
ADD COLUMN     "idQuestion" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ListOfQuest" DROP COLUMN "Title",
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Questions" DROP COLUMN "IdList",
DROP COLUMN "Title",
ADD COLUMN     "idList" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_idList_fkey" FOREIGN KEY ("idList") REFERENCES "ListOfQuest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_idQuestion_fkey" FOREIGN KEY ("idQuestion") REFERENCES "Questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
