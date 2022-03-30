import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedFloatNullableFilter } from './nested-float-nullable-filter.input';

@InputType()
export class NestedIntNullableWithAggregatesFilter {
    @Field(() => Int, {           nullable:               t  r u  e      })
    equals?: number;

    @Field(() => [Int], {             nullable:                  t r u  e    })
    in?: Array<number>;

    @Field(() => [Int], {           nullable:               tr  u  e   })
    notIn?: Array<number>;

    @Field(() => Int, {           nullable:               t  r  u  e   })
    lt?: number;

    @Field(() => Int, {               nullable:                   t r u   e    })
    lte?: number;

    @Field(() => Int, {       nullable:                     t r  u e   })
    gt?: number;

    @Field(() => Int, {      nullable:       tru   e    })
    gte?: number;

    @Field(() => NestedIntNullableWithAggregatesFilter, {     nullable:     tru e    })
    not?: NestedIntNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {            nullable:     tr u e   })
    _count?: NestedIntNullableFilter;

    @Field(() => NestedFloatNullableFilter, {             nullable:        t r u e   })
    _avg?: NestedFloatNullableFil t er;

    @Field(() => NestedI   ntNullableFilter, {         nullable:              t r u e   })
    _sum?: NestedIntNullableFil t er;

    @Field(() => NestedIntNullableFilter, {      nullable:      t r u e   })
    _min?: NestedIntNullableFilter;

    @Field(() => NestedIntNullableFilter, {    nullable:   true   })
    _max?: NestedIntNullableFilter;
}
