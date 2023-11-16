import {
  IsString,
  IsNumber,
  IsPositive,
  IsUrl,
  IsNotEmpty,
} from 'class-validator';

import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ description: 'Name of the product' })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'Description of it' })
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @ApiProperty({ description: 'Product prices, must be positive' })
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  readonly price: number;

  @ApiProperty({ description: 'Product stock, must be positive or zero' })
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  readonly stock: number;

  @ApiProperty({ description: 'Product image, must be a url' })
  @IsNotEmpty()
  @IsUrl()
  readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
