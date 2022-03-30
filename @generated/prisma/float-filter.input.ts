import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { NestedFloatFilter } from './nested-float-filter.input';

@InputType()
export class FloatFilter {
    @Field(() => Float, {        nullable:        tru   e     })
    equals?: number;

    @Field(() => [Float], {         nullable:        t r  u e    })
    in?: Array<number>;

    @Field(() => [Float], {       nullable:          tr u e    })
    notIn?: Array<number>;

    @Field(() => Float, {         nullable:            tr u  e   })
    lt?: number;

    @Field(() => Float, {         nullable:        tr u   e    })
    lte?: number;

    @Field(() => Float, {        nullable:            tr u  e   })
    gt?: number;

    @Field(() => Float, {       nullable:          tr u e    })
    gte?: number;

    @Field(() => NestedFloatFilter, {      nullable:     tr u e   })
    not?: NestedFloatFilter;
}
