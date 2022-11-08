import {PrismaClient,Uset} from "@prisma/client"

export const UserControler = class {
  private prisma: PrismaClient;
  constructor(){
    this.prisma = new PrismaClient();
  }
  async create(_data:Omit<Uset,'id'>) {
    try {

      return this.prisma.uset.create({
        data:{..._data}
      })

    } catch (e) { return e }

}

}