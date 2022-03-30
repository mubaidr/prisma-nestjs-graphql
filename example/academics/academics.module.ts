import { Module } from '@nestjs/common';
import { AcademicsResolver } from './academics.resolver';
import { AcademicsService } from './academics.service';

@Module({
    providers: [AcademicsResolver, AcademicsService],
})
export class AcademicsModule {}
