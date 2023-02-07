import { PartialType } from '@nestjs/mapped-types';
import { CreateParticularDto } from './create-particular.dto';

export class UpdateParticularDto extends PartialType(CreateParticularDto) {}
