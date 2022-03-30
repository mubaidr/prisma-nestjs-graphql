import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QueryMode } from './query-mode.enum';
import { NestedStringNullableWithAggregatesFilter } from './nested-string-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedStringNullableFilter } from './nested-string-nullable-filter.input';

@InputType()
export class StringNullableWithAggregatesFilter {
    @Field(() => String, {           nullable:                t r u e   })
    equals?: string;

    @Field(() => [String], {              nullable:              t r u  e    })
    in?: Array<string>;

    @Field(() => [String], {          nullable:                    t r  u  e   })
    notIn?: Array<string>;

    @Field(() => String, {           nullable:                          t r u e   })
    lt?: string;

    @Field(() => String, {           nullable:                         t r   u   e      })
    lte?: string;

    @Field(() => String, {           nullable:               t r   u  e   })
    gt?: string;

    @Field(() => String, {            nullable:                    t r u    e    })
    gte?: string;

    @Field(() => String, {                       nullable:                                           t r u e    })
    contains?: string;

    @Field(() => String, {           nullable:                t r  u   e    })
    startsWith?: string;

    @Field(() => String, {       nullable:              t r  u   e    })
    endsWith?: string;

    @Field(() => String, {     nullable:      tru  e    })
    search?: string;

    @Field(() => QueryMode, {        nullable:           tr u  e    })
    mode?: keyof typeof QueryMode;

    @Field(() => NestedStri  ngNullableWithAggregatesFilter, {          nullable:                    tr u e    })
    not?: NestedStringNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {      nullable:     tr u e   })
    _count?: NestedIntNullableFil t er;

    @Field(() => NestedStringNullableFilter, {      nullable:      t r u e   })
    _min?: NestedStringNullableFilter;

    @Field(() => NestedStringNullableFilter, {     nullable:    tru e   })
    _max?: NestedStringNullableFilter;
}
