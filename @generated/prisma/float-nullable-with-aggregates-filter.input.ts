import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { NestedFloatNullableWithAggregatesFilter } from './nested-float-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedFloatNullableFilter } from './nested-float-nullable-filter.input';

@InputType()
export class FloatNullableWithAggregatesFilter {
    @Field(() => Float, {           nullable:            t   r u   e       })
    equals?: number;

    @Field(() => [Float], {            nullable:                  t r  u e    })
    in?: Array<number>;

    @Field(() => [Float], {           nullable:                t  r   u  e   })
    notIn?: Array<number>;

    @Field(() => Float, {            nullable:               t  r  u  e   })
    lt?: number;

    @Field(() => Float, {              nullable:              t  r u   e    })
    lte?: number;

    @Field(() => Float, {       nullable:                tr u  e   })
    gt?: number;

    @Field(() => Float, {      nullable:       tru   e    })
    gte?: number;

    @Field(() => NestedFloatNullableWithAggregatesFilter, {       nullable:       tru   e    })
    not?: NestedFloatNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {           nullable:       tr u e   })
    _count?: NestedIntNullableFilter;

    @Field(() => NestedFloatNullableFilter, {             nullable:        t r u e   })
    _avg?: NestedFloatNullableFil t er;

    @Field(() => NestedFloatNullableFilter, {           nullable:            t r u e   })
    _sum?: NestedFloatNullableFilter;

    @Field(() => NestedFloatNullableFilter, {      nullable:        t r u e   })
    _min?: NestedFloatNullableFilter;

    @Field(() => NestedFloatNullableFilter, {     nullable:    tru e   })
    _max?: NestedFloatNullableFilter;
}
