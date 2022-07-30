/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Deployment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Deployment` DROP COLUMN `createdAt`,
    ADD COLUMN `deployedOn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
