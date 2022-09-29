import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/cars/entities/car.entity';
import { Location } from 'src/locations/entities/location.entity'
import { Repository } from 'typeorm';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { CarsService } from 'src/cars/cars.service';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class LocationsService {

  constructor(@InjectRepository(Location)
  private locationRepository: Repository<Location>,
    private readonly carService: CarsService,
    private readonly useService: UsersService
  ) { }

  async create(createLocationDto: CreateLocationDto) {
    const car: Car = await this.carService.findOne(createLocationDto.carId);
    const user: User = await this.useService.findOne(createLocationDto.userId)
    const newLocation = new Location();
    newLocation.debut_location = createLocationDto.debut_location;
    newLocation.fin_location = createLocationDto.fin_location;
    newLocation.prix_totale = createLocationDto.prix_totale;
    newLocation.car = car;
    newLocation.user = user;
    return this.locationRepository.save(newLocation)
  }

  findAll() {
    return this.locationRepository.find();
  }

  findOne(id: number): Promise<Location> {
    return this.locationRepository.findOneBy({ id });
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    return this.locationRepository.update({ id }, { ...updateLocationDto });
  }

  remove(id: number) {
    return this.locationRepository.delete(id);
  }
}
