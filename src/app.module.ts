import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { CarsModule } from './cars/cars.module';
import { LocationsModule } from './locations/locations.module';
import { Car } from './cars/entities/car.entity';
import { Location } from './locations/entities/location.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'localib',
    entities: [User, Car, Location],
    synchronize: true,
  }), UsersModule, CarsModule, LocationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
