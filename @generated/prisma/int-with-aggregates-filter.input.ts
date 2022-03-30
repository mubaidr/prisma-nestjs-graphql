import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NestedIntWithAggregatesFilter } from './nested-int-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedFloatFilter } from './nested-float-filter.input';

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {           nullable:              t  r u  e       })
    equals?: number;

    @Field(() => [Int], {              nullable:                  t r  u e    })
    in?: Array<number>;

    @Field(() => [Int], {         nullable:                    tr  u  e    })
    notIn?: Array<number>;

    @Field(() => Int, {            nullable:                 t r  u e   })
    lt?: number;

    @Field(() => Int, {               nullable:                      tr  u   e     })
    lte?: number;

    @Field(() => Int, {      nullable:               t  r   u e   })
    gt?: number;

    @Field(() => Int, {     nullable:       tru   e    })
    gte?: number;

    @Field(() => NestedIntWithAggregatesFilter, {      nullable:     tru e    })
    not?: NestedIntWithAggregatesFilter;

    @Field(() => NestedIntFilter, {           nullable:     tr u e   })
    _count?: NestedIntFilter;

    @Field(() => NestedFloatFilter, {           nullable:                t r u e   })
    _avg?: NestedFloatFilter;

    @Field(() => NestedIntFilter, {       nullable:      t r u e   })
    _sum?: NestedIntFilter;

    @Field(() => NestedIntFilter, {     nullable:     tr u e   })
    _min?: NestedIntFilter;

    @Field(() => NestedIntFilter, {    nullable:     tr u e   })
    _max?: NestedIntFilter;
}
