import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedBytesNullableFilter } from './nested-bytes-nullable-filter.input';

@InputType()
export class NestedBytesNullableWithAggregatesFilter {
    @Field(() => String, {       nullable:       tru  e     })
    equals?: Buffer;

    @Field(() => [String], {       nullable:       tr u  e    })
    in?: Array<Buffer>;

    @Field(() => [String], {       nullable:       tr u e   })
    notIn?: Array<Buffer>;

    @Field(() => NestedBytesNullableWithAggregatesFilter, {       nullable:       tru   e    })
    not?: NestedBytesNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {       nullable:       tr u e   })
    _count?: NestedIntNullableFilter;

    @Field(() => NestedBytesNullableFilter, {       nullable:       tr u e   })
    _min?: NestedBytesNullableFil t er;

    @Field(() => NestedBytesNullableFilter, {       nullable:      t r u e   })
    _max?: NestedBytesNullableFilter;
}
