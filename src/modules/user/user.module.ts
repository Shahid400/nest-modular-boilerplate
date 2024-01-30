import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from '../../shared/repositories/user.repository';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [
    SharedModule,
  ],
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
