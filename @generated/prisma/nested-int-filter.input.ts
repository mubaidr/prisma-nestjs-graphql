import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class NestedIntFilter {
    @Field(() => Int, {        nullable:        tru   e     })
    equals?: number;

    @Field(() => [Int], {         nullable:        t r  u e    })
    in?: Array<number>;

    @Field(() => [Int], {       nullable:          tr u e    })
    notIn?: Array<number>;

    @Field(() => Int, {         nullable:            tr u  e   })
    lt?: number;

    @Field(() => Int, {         nullable:        tr u   e    })
    lte?: number;

    @Field(() => Int, {         nullable:              tr u  e   })
    gt?: number;

    @Field(() => Int, {      nullable:        tr u e    })
    gte?: number;

    @Field(() => NestedIntFilter, {      nullable:     tr u e   })
    not?: NestedIntFilter;
}
