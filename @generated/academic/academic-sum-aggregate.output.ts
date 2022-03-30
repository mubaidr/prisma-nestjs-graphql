import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class AcademicSumAggregate {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => Int, { nullable: true })
    duration?: number;

    @Field(() => Int, { nullable: true })
    total?: number;

    @Field(() => GraphQLDecimal, { nullable: true })
    obtained?: Decimal;

    @Field(() => GraphQLDecimal, { nullable: true })
    percentage?: Decimal;

    @Field(() => Int, { nullable: true })
    division?: number;
}