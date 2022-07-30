/*
  Warnings:

  - You are about to alter the column `deployedOn` on the `Deployment` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `Deployment` MODIFY `deployedOn` DATETIME(3) NOT NULL;
