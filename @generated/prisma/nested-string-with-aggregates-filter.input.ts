import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedStringFilter } from './nested-string-filter.input';

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, {           nullable:            t r  u  e   })
    equals?: string;

    @Field(() => [String], {             nullable:              t r u  e    })
    in?: Array<string>;

    @Field(() => [String], {           nullable:             t  r  u  e   })
    notIn?: Array<string>;

    @Field(() => String, {           nullable:                          tr u  e   })
    lt?: string;

    @Field(() => String, {           nullable:                    t  r   u   e      })
    lte?: string;

    @Field(() => String, {           nullable:                  tr u  e   })
    gt?: string;

    @Field(() => String, {           nullable:                     tr u    e    })
    gte?: string;

    @Field(() => String, {               nullable:                  t  r u   e    })
    contains?: string;

    @Field(() => String, {        nullable:                   t  r  u  e   })
    startsWith?: string;

    @Field(() => String, {      nullable:         tr  u   e    })
    endsWith?: string;

    @Field(() => String, {       nullable:         tr u  e    })
    search?: string;

    @Field(() => NestedStringWithAggregatesFilter, {           nullable:                tr u e    })
    not?: NestedStringWithAggregatesFilter;

    @Field(() => NestedIntFilter, {       nullable:        t r u e   })
    _count?: NestedIntFilter;

    @Field(() => NestedStringFilter, {     nullable:      t r u e   })
    _min?: NestedStringFilter;

    @Field(() => NestedStringFilter, {     nullable:    tru e   })
    _max?: NestedStringFilter;
}
