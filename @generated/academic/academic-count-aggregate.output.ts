import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AcademicCountAggregate {
    @Field(() => Int, { nullable: false })
    id!: number;

    @Field(() => Int, { nullable: false })
    institute!: number;

    @Field(() => Int, { nullable: false })
    passingDate!: number;

    @Field(() => Int, { nullable: false })
    duration!: number;

    @Field(() => Int, { nullable: false })
    total!: number;

    @Field(() => Int, { nullable: false })
    obtained!: number;

    @Field(() => Int, { nullable: false })
    percentage!: number;

    @Field(() => Int, { nullable: false })
    division!: number;

    @Field(() => Int, { nullable: false })
    _all!: number;
}
