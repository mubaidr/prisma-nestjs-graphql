import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QueryMode } from './query-mode.enum';
import { NestedStringNullableFilter } from './nested-string-nullable-filter.input';

@InputType()
export class StringNullableFilter {
    @Field(() => String, {           nullable:          t r u e   })
    equals?: string;

    @Field(() => [String], {              nullable:              t r u  e    })
    in?: Array<string>;

    @Field(() => [String], {        nullable:            t  r u  e   })
    notIn?: Array<string>;

    @Field(() => String, {           nullable:                    tr u  e   })
    lt?: string;

    @Field(() => String, {           nullable:                t  r  u   e     })
    lte?: string;

    @Field(() => String, {           nullable:                    t r  u  e   })
    gt?: string;

    @Field(() => String, {             nullable:           t r u    e     })
    gte?: string;

    @Field(() => String, {             nullable:                 t r u   e    })
    contains?: string;

    @Field(() => String, {              nullable:                   t  r  u  e   })
    startsWith?: string;

    @Field(() => String, {            nullable:                tr u   e    })
    endsWith?: string;

    @Field(() => String, {       nullable:        tr u e    })
    search?: string;

    @Field(() => QueryMode, {     nullable:      tr u e    })
    mode?: keyof typeof QueryMode;

    @Field(() => NestedStringNullableFilter, {     nullable:    tru e   })
    not?: NestedStringNullableFilter;
}
