import { IsEnum } from 'class-validator';
import { TaskStatus } from '../interfaces/task-status.interface';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
