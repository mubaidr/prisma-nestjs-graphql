import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {          nullable:      tru  e    })
    id?: true;

    @Field(() => Boolean, {         nullable:           t   r u   e      })
    email?: true;

    @Field(() => Boolean, {           nullable:             t  r u  e      })
    name?: true;

    @Field(() => Boolean, {           nullable:              t r  u   e    })
    password?: true;

    @Field(() => Boolean, {           nullable:          t  r u   e    })
    bio?: true;

    @Field(() => Boolean, {          nullable:        tr u   e    })
    image?: true;

    @Field(() => Boolean, {            nullable:              tr u   e    })
    countComments?: true;

    @Field(() => Boolean, {        nullable:         t r  u e   })
    rating?: true;

    @Field(() => Boolean, {      nullable:      tr u e    })
    role?: true;

    @Field(() => Boolean, {     nullable:     tr u e   })
    _all?: true;
}
