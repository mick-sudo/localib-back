import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Location } from "src/locations/entities/location.entity";

@Entity()
export class Car {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  marque: string;

  @Column()
  modele: string;

  @Column()
  immatriculation: string;

  @Column()
  etat: string;

  @Column()
  prix: number;

  @Column()
  type: string;

  @Column({ default: true })
  dispo: boolean;

  @OneToMany(() => Location, (location) => location.car)
  locations: Location[];
}
