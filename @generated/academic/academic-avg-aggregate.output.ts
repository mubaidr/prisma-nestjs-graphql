import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class AcademicAvgAggregate {
    @Field(() => Float, { nullable: true })
    id?: number;

    @Field(() => Float, { nullable: true })
    duration?: number;

    @Field(() => Float, { nullable: true })
    total?: number;

    @Field(() => GraphQLDecimal, { nullable: true })
    obtained?: Decimal;

    @Field(() => GraphQLDecimal, { nullable: true })
    percentage?: Decimal;

    @Field(() => Float, { nullable: true })
    division?: number;
}
