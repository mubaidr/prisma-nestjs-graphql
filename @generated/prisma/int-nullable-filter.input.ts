import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';

@InputType()
export class IntNullableFilter {
    @Field(() => Int, {        nullable:        tr u  e     })
    equals?: number;

    @Field(() => [Int], {        nullable:        t r  u e    })
    in?: Array<number>;

    @Field(() => [Int], {        nullable:         tr  u  e   })
    notIn?: Array<number>;

    @Field(() => Int, {          nullable:           t  r  u  e   })
    lt?: number;

    @Field(() => Int, {         nullable:        tru   e     })
    lte?: number;

    @Field(() => Int, {        nullable:            tr u  e   })
    gt?: number;

    @Field(() => Int, {     nullable:      tr u e    })
    gte?: number;

    @Field(() => NestedIntNullableFilter, {      nullable:     tr u e   })
    not?: NestedIntNullableFilter;
}
