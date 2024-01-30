import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from '@shared/repositories';
import { IUserService } from './interfaces/service.interface';
import { Types } from 'mongoose';

@Injectable()
export class UserService implements IUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(payload: { firstName: string; lastName: string }) {
    return await this.userRepository.create(payload);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    return await this.userRepository.findOne({ _id: new Types.ObjectId(id) });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userRepository.findOneAndUpdate(
      { _id: new Types.ObjectId(id) },
      updateUserDto,
    );
  }

  async remove(id: string) {
    return await this.userRepository.findOneAndDelete({ id });
  }
}
