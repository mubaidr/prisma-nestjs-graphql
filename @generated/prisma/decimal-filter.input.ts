import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { NestedDecimalFilter } from './nested-decimal-filter.input';

@InputType()
export class DecimalFilter {
    @Field(() => GraphQLDecimal, { nullable: true })
    equals?: Decimal;

    @Field(() => [GraphQLDecimal], { nullable: true })
    in?: Array<Decimal>;

    @Field(() => [GraphQLDecimal], { nullable: true })
    notIn?: Array<Decimal>;

    @Field(() => GraphQLDecimal, { nullable: true })
    lt?: Decimal;

    @Field(() => GraphQLDecimal, { nullable: true })
    lte?: Decimal;

    @Field(() => GraphQLDecimal, { nullable: true })
    gt?: Decimal;

    @Field(() => GraphQLDecimal, { nullable: true })
    gte?: Decimal;

    @Field(() => NestedDecimalFilter, { nullable: true })
    not?: NestedDecimalFilter;
}
