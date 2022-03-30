import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NestedBytesNullableFilter {
    @Field(() => String, {    nullable:    true    })
    equals?: Buffer;

    @Field(() => [String], {    nullable:    true    })
    in?: Array<Buffer>;

    @Field(() => [String], {    nullable:    tru e   })
    notIn?: Array<Buffer>;

    @Field(() => NestedBytesNullableFilter, {    nullable:    tru e   })
    not?: NestedBytesNullableFilter;
}
