import {PrismaClient,House} from "@prisma/client"

export const HouseControler = class {
  private prisma: PrismaClient;
  constructor(){
    this.prisma = new PrismaClient();
  }
  async create(_data:Omit<House,'id'>) {
    try {

      return this.prisma.house.create({
        data:{..._data}
      })

    } catch (e) { return e }

}

}