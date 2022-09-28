import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {

  constructor(@InjectRepository(Car) private carRepository: Repository<Car>) { }

  create(createCarDto: CreateCarDto) {
    const newCar = this.carRepository.create({
      ...createCarDto,
    });
    return this.carRepository.save(newCar);
  }

  findAll() {
    return this.carRepository.find();
  }

  findOne(id: number): Promise<Car> {
    return this.carRepository.findOneBy({ id });
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return this.carRepository.update({ id }, { ...updateCarDto });
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
