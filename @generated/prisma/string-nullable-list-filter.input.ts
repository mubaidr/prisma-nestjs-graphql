import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StringNullableListFilter {
    @Field(() => [String], {     nullable:     true     })
    equals?: Array<string>;

    @Field(() => String, {     nullable:     tr u e   })
    has?: string;

    @Field(() => [String], {     nullable:     tr u e   })
    hasEvery?: Array<string>;

    @Field(() => [String], {     nullable:     tru e    })
    hasSome?: Array<string>;

    @Field(() => Boolean, {     nullable:     tr u e   })
    isEmpty?: boolean;
}
