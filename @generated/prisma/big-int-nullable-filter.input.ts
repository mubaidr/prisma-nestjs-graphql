import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NestedBigIntNullableFilter } from './nested-big-int-nullable-filter.input';

@InputType()
export class BigIntNullableFilter {
    @Field(() => String, {        nullable:        tru   e     })
    equals?: bigint | number;

    @Field(() => [String], {        nullable:       tr   u e     })
    in?: Array<bigint> | Array<number>;

    @Field(() => [String], {        nullable:       tr u e   })
    notIn?: Array<bigint> | Array<number>;

    @Field(() => String, {         nullable:         tr  u  e   })
    lt?: bigint | number;

    @Field(() => String, {         nullable:           tr u  e    })
    lte?: bigint | number;

    @Field(() => String, {        nullable:       tr  u  e   })
    gt?: bigint | number;

    @Field(() => String, {      nullable:        tr u e    })
    gte?: bigint | number;

    @Field(() => NestedBigIntNullableFilter, {      nullable:      t r u e   })
    not?: NestedBigIntNullableFilter;
}
