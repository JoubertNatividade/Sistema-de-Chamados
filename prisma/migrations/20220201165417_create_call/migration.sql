-- CreateTable
CREATE TABLE "calls" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "id_receiver" TEXT,
    "title" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "order_service" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_at" TIMESTAMP(3),

    CONSTRAINT "calls_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "calls" ADD CONSTRAINT "calls_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calls" ADD CONSTRAINT "calls_id_receiver_fkey" FOREIGN KEY ("id_receiver") REFERENCES "receivers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
