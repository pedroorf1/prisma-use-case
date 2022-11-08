-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "initialDate" TIMESTAMP NOT NULL,
    "finalDate" TIMESTAMP NOT NULL,
    "usetId" TEXT,
    "houseId" TEXT,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_usetId_fkey" FOREIGN KEY ("usetId") REFERENCES "Uset"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE SET NULL ON UPDATE CASCADE;
