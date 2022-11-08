import {PrismaClient,Booking} from "@prisma/client"

export const BookingControler = class {
  private prisma: PrismaClient;
  constructor(){
    this.prisma = new PrismaClient();
  }
  async create(_data:Omit<Booking,'id'>) {
    try {

      return this.prisma.booking.create({
        data:{..._data}
      })

    } catch (e) { return e }

}
  async findAll() {
    try {
      return await this.prisma.booking.findMany({
        select: {
          id: true,
          initialDate: true,
          finalDate: true,
          house: {
            select: {
              id: true,
              title:true
            }
          }
      }
      })

    } catch (e) { return e }

}

}