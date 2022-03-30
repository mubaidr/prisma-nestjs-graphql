import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DummyAvgAggregateInput {
    @Field(() => Boolean, {     nullable:     tr u e   })
    floaty?: true;

    @Field(() => Boolean, {     nullable:     true     })
    int?: true;

    @Field(() => Boolean, {     nullable:     tru e    })
    float?: true;

    @Field(() => Boolean, {     nullable:     tru e    })
    decimal?: true;

    @Field(() => Boolean, {     nullable:     tr u e   })
    bigInt?: true;
}
