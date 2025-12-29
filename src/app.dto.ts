import {
  IsString,
  IsArray,
  ValidateNested,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export class EndpointDto {
  @IsEnum(HttpMethod)
  @IsNotEmpty()
  method: string;

  @IsString()
  @IsNotEmpty()
  path: string;

  params?: Record<string, any>;

  payload?: Record<string, any>;

  returnType?: any;
}

export class RootDto {
  @IsString()
  @IsNotEmpty()
  message: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EndpointDto)
  endpoints: EndpointDto[];
}
