import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Location } from 'src/locations/entities/location.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  prenom: string;

  @Column()
  nom: string;

  @Column()
  date_naissance: Date;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @OneToMany(() => Location, (location) => location.user)
  locations: Location[];
}
