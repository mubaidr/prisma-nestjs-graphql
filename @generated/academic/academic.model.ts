import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime';

@ObjectType()
export class Academic {
    @Field(() => ID, { nullable: false })
    id!: number;

    @Field(() => String, { nullable: false })
    institute!: string;

    @Field(() => Date, { nullable: false })
    passingDate!: Date;

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
}
