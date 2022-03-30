import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AcademicCountAggregate } from './academic-count-aggregate.output';
import { AcademicAvgAggregate } from './academic-avg-aggregate.output';
import { AcademicSumAggregate } from './academic-sum-aggregate.output';
import { AcademicMinAggregate } from './academic-min-aggregate.output';
import { AcademicMaxAggregate } from './academic-max-aggregate.output';

@ObjectType()
export class AggregateAcademic {
    @Field(() => AcademicCountAggregate, { nullable: true })
    _count?: AcademicCountAggregate;

    @Field(() => AcademicAvgAggregate, { nullable: true })
    _avg?: AcademicAvgAggregate;

    @Field(() => AcademicSumAggregate, { nullable: true })
    _sum?: AcademicSumAggregate;

    @Field(() => AcademicMinAggregate, { nullable: true })
    _min?: AcademicMinAggregate;

    @Field(() => AcademicMaxAggregate, { nullable: true })
    _max?: AcademicMaxAggregate;
}
