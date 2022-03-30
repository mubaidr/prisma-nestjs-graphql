import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { NestedDecimalWithAggregatesFilter } from './nested-decimal-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedDecimalFilter } from './nested-decimal-filter.input';

@InputType()
export class DecimalWithAggregatesFilter {
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

    @Field(() => NestedDecimalWithAggregatesFilter, { nullable: true })
    not?: NestedDecimalWithAggregatesFilter;

    @Field(() => NestedIntFilter, { nullable: true })
    _count?: NestedIntFilter;

    @Field(() => NestedDecimalFilter, { nullable: true })
    _avg?: NestedDecimalFilter;

    @Field(() => NestedDecimalFilter, { nullable: true })
    _sum?: NestedDecimalFilter;

    @Field(() => NestedDecimalFilter, { nullable: true })
    _min?: NestedDecimalFilter;

    @Field(() => NestedDecimalFilter, { nullable: true })
    _max?: NestedDecimalFilter;
}
