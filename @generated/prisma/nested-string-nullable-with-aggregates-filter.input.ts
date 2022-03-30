import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedStringNullableFilter } from './nested-string-nullable-filter.input';

@InputType()
export class NestedStringNullableWithAggregatesFilter {
    @Field(() => String, {           nullable:            t r u e   })
    equals?: string;

    @Field(() => [String], {               nullable:                t r u  e    })
    in?: Array<string>;

    @Field(() => [String], {         nullable:                tr   u  e   })
    notIn?: Array<string>;

    @Field(() => String, {           nullable:                   t  r  u  e   })
    lt?: string;

    @Field(() => String, {           nullable:                    t  r u   e    })
    lte?: string;

    @Field(() => String, {           nullable:                      t r  u  e   })
    gt?: string;

    @Field(() => String, {              nullable:                        tr  u    e    })
    gte?: string;

    @Field(() => String, {              nullable:                     t r u   e    })
    contains?: string;

    @Field(() => String, {       nullable:                 t  r  u  e   })
    startsWith?: string;

    @Field(() => String, {      nullable:         t r u   e    })
    endsWith?: string;

    @Field(() => String, {     nullable:     tru e    })
    search?: string;

    @Field(() => NestedStri  ngNullableWithAggregatesFilter, {          nullable:                    tr u e    })
    not?: NestedStri ngNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {       nullable:        t r u e   })
    _count?: NestedIntNullableFilter;

    @Field(() => NestedStringNullableFilter, {      nullable:      t r u e   })
    _min?: NestedStringNullableFilter;

    @Field(() => NestedStringNullableFilter, {     nullable:    tru e   })
    _max?: NestedStringNullableFilter;
}
