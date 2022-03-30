import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {        nullable:       tr u  e    })
    id?: true;

    @Field(() => Boolean, {          nullable:        tru   e     })
    email?: true;

    @Field(() => Boolean, {         nullable:         tr u  e      })
    name?: true;

    @Field(() => Boolean, {          nullable:          t  r u   e    })
    password?: true;

    @Field(() => Boolean, {           nullable:            t r  u   e    })
    bio?: true;

    @Field(() => Boolean, {          nullable:       tru   e    })
    image?: true;

    @Field(() => Boolean, {         nullable:              tr u e    })
    countComments?: true;

    @Field(() => Boolean, {      nullable:       tr u e   })
    rating?: true;

    @Field(() => Boolean, {     nullable:    tru e   })
    role?: true;
}
