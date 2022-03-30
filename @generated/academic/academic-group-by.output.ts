import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { AcademicCountAggregate } from './academic-count-aggregate.output';
import { AcademicAvgAggregate } from './academic-avg-aggregate.output';
import { AcademicSumAggregate } from './academic-sum-aggregate.output';
import { AcademicMinAggregate } from './academic-min-aggregate.output';
import { AcademicMaxAggregate } from './academic-max-aggregate.output';

@ObjectType()
export class AcademicGroupBy {
    @Field(() => Int, { nullable: false })
    id!: number;

    @Field(() => String, { nullable: false })
    institute!: string;

    @Field(() => Date, { nullable: false })
    passingDate!: Date | string;

    @Field(() => Int, { nullable: false })
    duration!: number;

    @Field(() => Int, { nullable: false })
    total!: number;

    @Field(() => GraphQLDecimal, { nullable: false })
    obtained!: Decimal;

    @Field(() => GraphQLDecimal, { nullable: false })
    percentage!: Decimal;

    @Field(() => Int, { nullable: false })
    division!: number;

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
