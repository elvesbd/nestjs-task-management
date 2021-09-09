import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../interfaces/task-status.interface';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
