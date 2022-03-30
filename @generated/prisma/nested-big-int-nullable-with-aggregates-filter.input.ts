import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedFloatNullableFilter } from './nested-float-nullable-filter.input';
import { NestedBigIntNullableFilter } from './nested-big-int-nullable-filter.input';

@InputType()
export class NestedBigIntNullableWithAggregatesFilter {
    @Field(() => String, {           nullable:              t  r u   e      })
    equals?: bigint | number;

    @Field(() => [String], {            nullable:                 t r  u  e    })
    in?: Array<bigint> | Array<number>;

    @Field(() => [String], {           nullable:          t r u e   })
    notIn?: Array<bigint> | Array<number>;

    @Field(() => String, {           nullable:                    tr u  e   })
    lt?: bigint | number;

    @Field(() => String, {               nullable:                   t r u   e    })
    lte?: bigint | number;

    @Field(() => String, {       nullable:               t  r   u e   })
    gt?: bigint | number;

    @Field(() => String, {      nullable:        tr u   e    })
    gte?: bigint | number;

    @Field(() => NestedBigIntNullableWithAggregatesFilter, {      nullable:      tru  e    })
    not?: NestedBigIntNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {           nullable:     tr u e   })
    _count?: NestedIntNullableFilter;

    @Field(() => NestedFloatNullableFilter, {            nullable:        t r u e   })
    _avg?: NestedFloatNullableFil t er;

    @Field(() => NestedBigIntNullableFilter, {              nullable:          t r u e   })
    _sum?: NestedBigIntNullableFilter;

    @Field(() => NestedBigIntNullableFilter, {      nullable:          t r u e   })
    _min?: NestedBigIntNullableFilter;

    @Field(() => NestedBigIntNullableFilter, {    nullable:   true   })
    _max?: NestedBigIntNullableFilter;
}
