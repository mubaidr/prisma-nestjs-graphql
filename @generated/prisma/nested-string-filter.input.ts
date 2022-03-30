import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NestedStringFilter {
    @Field(() => String, {          nullable:         t r  u e     })
    equals?: string;

    @Field(() => [String], {           nullable:          t r u  e    })
    in?: Array<string>;

    @Field(() => [String], {          nullable:             t  r  u  e   })
    notIn?: Array<string>;

    @Field(() => String, {           nullable:                  t r  u  e   })
    lt?: string;

    @Field(() => String, {           nullable:                 t r u   e    })
    lte?: string;

    @Field(() => String, {           nullable:                    tr u  e   })
    gt?: string;

    @Field(() => String, {           nullable:               t r u   e    })
    gte?: string;

    @Field(() => String, {               nullable:                         tru e    })
    contains?: string;

    @Field(() => String, {          nullable:           t r u  e   })
    startsWith?: string;

    @Field(() => String, {        nullable:         tr u  e    })
    endsWith?: string;

    @Field(() => String, {     nullable:       tr u  e    })
    search?: string;

    @Field(() => NestedStringFilter, {      nullable:     tr u e   })
    not?: NestedStringFilter;
}
