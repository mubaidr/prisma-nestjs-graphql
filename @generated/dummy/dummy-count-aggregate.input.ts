import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DummyCountAggregateInput {
    @Field(() => Boolean, {          nullable:        tr u   e    })
    id?: true;

    @Field(() => Boolean, {           nullable:           t r u   e    })
    created?: true;

    @Field(() => Boolean, {           nullable:           t r  u e   })
    floaty?: true;

    @Field(() => Boolean, {           nullable:         tr u   e     })
    int?: true;

    @Field(() => Boolean, {           nullable:           t  r   u e   })
    float?: true;

    @Field(() => Boolean, {           nullable:                   t r  u e   })
    bytes?: true;

    @Field(() => Boolean, {           nullable:            t r  u   e    })
    decimal?: true;

    @Field(() => Boolean, {          nullable:              tr u   e    })
    bigInt?: true;

    @Field(() => Boolean, {        nullable:         tr u  e    })
    json?: true;

    @Field(() => Boolean, {      nullable:        tr u e    })
    friends?: true;

    @Field(() => Boolean, {     nullable:    tru e   })
    _all?: true;
}
