import { PartialType, PickType } from '@nestjs/mapped-types';
import { TaskDto } from '../entities/task.entity';

export class UpdateTaskDto extends PartialType(
  PickType(TaskDto, ['done', 'name']),
) {}
