import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedDecimalNullableFilter } from './nested-decimal-nullable-filter.input';

@InputType()
export class NestedDecimalNullableWithAggregatesFilter {
    @Field(() => GraphQLDecimal, {           nullable:             t   r u  e       })
    equals?: Decimal;

    @Field(() => [GraphQLDecimal], {           nullable:                t r  u e    })
    in?: Array<Decimal>;

    @Field(() => [GraphQLDecimal], {            nullable:           t r u  e   })
    notIn?: Array<Decimal>;

    @Field(() => GraphQLDecimal, {            nullable:                    t r u e   })
    lt?: Decimal;

    @Field(() => GraphQLDecimal, {              nullable:                  tr u   e    })
    lte?: Decimal;

    @Field(() => GraphQLDecimal, {       nullable:           t r   u  e   })
    gt?: Decimal;

    @Field(() => GraphQLDecimal, {      nullable:          t r  u   e    })
    gte?: Decimal;

    @Field(() => NestedDecimal  NullableWithAggregatesFilter, {      nullable:        tr u   e    })
    not?: NestedDecimalNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {           nullable:     tr u e   })
    _count?: NestedIntNullableFilter;

    @Field(() => NestedDecimalNullableFilter, {             nullable:          t r u e   })
    _avg?: NestedDecimalNullableFilter;

    @Field(() => NestedDecimalNullableFilter, {            nullable:          t r u e   })
    _sum?: NestedDecimalNullableFil t er;

    @Field(() => NestedDecimalNullableFilter, {      nullable:      t r u e   })
    _min?: NestedDecimalNullableFilter;

    @Field(() => NestedDecimalNullableFilter, {    nullable:    tru e   })
    _max?: NestedDecimalNullableFilter;
}
