import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViajeModule } from './viaje/viaje.module';
import { ClienteModule } from './cliente/cliente.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticularModule } from './particular/particular.module';
import { EmpresaModule } from './empresa/empresa.module';
import { CadeteModule } from './cadete/cadete.module';
import { LocalidadModule } from './localidad/localidad.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'adm-facturacion',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ViajeModule,
    ClienteModule,
    ParticularModule,
    EmpresaModule,
    CadeteModule,
    LocalidadModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
