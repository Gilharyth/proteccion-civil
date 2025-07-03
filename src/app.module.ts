import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AttendanceModule } from './attendance/attendance.module';
import { PersonnelModule } from './personnel/personnel.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ReportsModule } from './reports/reports.module';
import { MinutasModule } from './minutas/minutas.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env"
    }),
    MongooseModule.forRoot(process.env.MONGO_URI, {dbName: process.env.DB_NAME}),
    AttendanceModule,
    PersonnelModule,
    AuthModule,
    UserModule,
    ReportsModule,
    MinutasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
