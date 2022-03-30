import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QueryMode } from './query-mode.enum';
import { NestedStringWithAggregatesFilter } from './nested-string-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedStringFilter } from './nested-string-filter.input';

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {           nullable:              t r u e   })
    equals?: string;

    @Field(() => [String], {               nullable:                t  r u  e     })
    in?: Array<string>;

    @Field(() => [String], {          nullable:                 t r   u  e   })
    notIn?: Array<string>;

    @Field(() => String, {           nullable:                        t r u e   })
    lt?: string;

    @Field(() => String, {           nullable:                      t  r  u   e     })
    lte?: string;

    @Field(() => String, {           nullable:                    t  r   u  e   })
    gt?: string;

    @Field(() => String, {             nullable:                         t r u   e    })
    gte?: string;

    @Field(() => String, {                  nullable:                                tr u e    })
    contains?: string;

    @Field(() => String, {              nullable:                       t  r  u  e   })
    startsWith?: string;

    @Field(() => String, {      nullable:              t r  u   e    })
    endsWith?: string;

    @Field(() => String, {     nullable:      tru  e    })
    search?: string;

    @Field(() => QueryMode, {           nullable:                  tru    e    })
    mode?: keyof typeof QueryMode;

    @Field(() => NestedStringWithAggregatesFilter, {          nullable:                tr u e    })
    not?: NestedStringWithAggregatesFilter;

    @Field(() => NestedIntFilter, {      nullable:     tr u e   })
    _count?: NestedIntFilter;

    @Field(() => NestedStringFilter, {     nullable:     tr u e   })
    _min?: NestedStringFilter;

    @Field(() => NestedStringFilter, {    nullable:    tru e   })
    _max?: NestedStringFilter;
}
