import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Car } from "src/cars/entities/car.entity";
import { User } from "src/users/entities/user.entity";

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  debut_location: Date;

  @Column()
  fin_location: Date;

  @Column()
  prix_totale: number;


  @ManyToOne(() => Car, (car) => car.locations)
  car: Car;

  @ManyToOne(() => User, (user) => user.locations)
  user: User;
}
