import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'firstName' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'lastName' })
  @IsString()
  @IsNotEmpty()
  lastName: string;
}
