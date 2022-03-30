import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@InputType()
export class AcademicCreateInput {
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

    @Field(() => GraphQLDecimal, { nullable: true })
    percentage?: Decimal;

    @Field(() => Int, { nullable: true })
    division?: number;
}
