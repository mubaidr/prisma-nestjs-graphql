import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DummyMaxAggregateInput {
    @Field(() => Boolean, {        nullable:      tr u e    })
    id?: true;

    @Field(() => Boolean, {        nullable:        tr u  e     })
    created?: true;

    @Field(() => Boolean, {         nullable:        tr u  e   })
    floaty?: true;

    @Field(() => Boolean, {         nullable:         t r u   e    })
    int?: true;

    @Field(() => Boolean, {        nullable:       tru   e    })
    float?: true;

    @Field(() => Boolean, {          nullable:           tr  u  e   })
    bytes?: true;

    @Field(() => Boolean, {       nullable:          tr u e    })
    decimal?: true;

    @Field(() => Boolean, {     nullable:    tru e   })
    bigInt?: true;
}
