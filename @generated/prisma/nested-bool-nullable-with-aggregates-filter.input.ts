import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedBoolNullableFilter } from './nested-bool-nullable-filter.input';

@InputType()
export class NestedBoolNullableWithAggregatesFilter {
    @Field(() => Boolean, {     nullable:     true     })
    equals?: boolean;

    @Field(() => NestedBoolNullableWithAggregatesFilter, {     nullable:     tru e    })
    not?: NestedBoolNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {     nullable:     tr u e   })
    _count?: NestedIntNullableFilter;

    @Field(() => NestedBoolNullableFilter, {     nullable:     tr u e   })
    _min?: NestedBoolNullableFilter;

    @Field(() => NestedBoolNullableFilter, {     nullable:     tr u e   })
    _max?: NestedBoolNullableFilter;
}
