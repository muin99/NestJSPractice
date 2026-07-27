import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CatalogModule } from './catalog/catalog.module';
import { AcademyModule } from './academy/academy.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', host: '127.0.0.1', port: 5432,
      username: 'onukrom', password: '', database: 'relationships_demo_db',
      autoLoadEntities: true, synchronize: true,
    }),
    UsersModule, CatalogModule, AcademyModule,
  ],
})
export class AppModule {}
