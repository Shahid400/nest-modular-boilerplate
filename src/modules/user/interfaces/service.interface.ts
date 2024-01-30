import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

export interface IUserService {
  create(createUserDto: CreateUserDto): Promise<any>;
  findAll(): Promise<any>;
  findOne(id: string): Promise<any>;
  update(id: string, updateUserDto: UpdateUserDto): Promise<any>;
  remove(id: string): Promise<any>;
}
