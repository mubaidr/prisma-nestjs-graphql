import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class AcademicMaxAggregate {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => String, { nullable: true })
    institute?: string;

    @Field(() => Date, { nullable: true })
    passingDate?: Date | string;

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
