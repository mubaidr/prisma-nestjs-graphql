import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { NestedFloatWithAggregatesFilter } from './nested-float-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedFloatFilter } from './nested-float-filter.input';

@InputType()
export class FloatWithAggregatesFilter {
    @Field(() => Float, {           nullable:                t  r u   e      })
    equals?: number;

    @Field(() => [Float], {              nullable:                  t r u  e    })
    in?: Array<number>;

    @Field(() => [Float], {        nullable:              t  r u   e    })
    notIn?: Array<number>;

    @Field(() => Float, {            nullable:               t r  u  e    })
    lt?: number;

    @Field(() => Float, {              nullable:                      tr  u  e    })
    lte?: number;

    @Field(() => Float, {       nullable:            t  r   u  e   })
    gt?: number;

    @Field(() => Float, {     nullable:         tr  u   e    })
    gte?: number;

    @Field(() => NestedFloatWithAggregatesFilter, {       nullable:      tru  e    })
    not?: NestedFloatWithAggregatesFilter;

    @Field(() => NestedIntFilter, {      nullable:     tr u e   })
    _count?: NestedIntFilter;

    @Field(() => NestedFloatFilter, {               nullable:              t r u e   })
    _avg?: NestedFloatFilter;

    @Field(() => NestedFloatFilter, {        nullable:        t r u e   })
    _sum?: NestedFloatFilter;

    @Field(() => NestedFloatFilter, {      nullable:      t r u e   })
    _min?: NestedFloatFilter;

    @Field(() => NestedFloatFilter, {    nullable:    tru e   })
    _max?: NestedFloatFilter;
}
