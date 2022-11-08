import { UserControler} from "./controllers/user"
import {BookingControler } from "./controllers/booking"
import { HouseControler } from "./controllers/house"

(() => {
  const userControler = new UserControler();
  const houseControler = new HouseControler();
  const bookingControler = new BookingControler();

  // userControler.create({
  //   name: "Pedro",
  //   email:"pedro@pedro.com.2"
  // }).then((result) => {
  //   console.log("new user: ",result)
  // });

  // houseControler.create({
  //   title: "Casa do lago",
  //   desciption:"Nova Jersei"
  // }).then((result) => {
  //   console.log("new house: ",result)
  // });

  // bookingControler.create({
  //   initialDate: new Date(),
  //   finalDate: new Date("2022-10-03"),
  //   houseId:'013cb529-cd09-48a9-bd1d-81b750eefdc3',
  //   usetId: '75e584b4-8903-4154-b83e-8ea80153cfea'
  // }).then((result) => {
  //   console.log("new booking: ",result)
  // });

  bookingControler.findAll().then((result) => {
    console.log("new booking: ",result)
  });

})()