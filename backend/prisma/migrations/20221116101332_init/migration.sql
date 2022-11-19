-- CreateTable
CREATE TABLE "ListOfQuest" (
    "id" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,

    CONSTRAINT "ListOfQuest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Questions" (
    "id" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "IdList" INTEGER NOT NULL,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answers" (
    "id" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "IdQuestion" INTEGER NOT NULL,

    CONSTRAINT "Answers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_IdList_fkey" FOREIGN KEY ("IdList") REFERENCES "ListOfQuest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_IdQuestion_fkey" FOREIGN KEY ("IdQuestion") REFERENCES "Questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
