import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ArticleMinAggregateInput {
    @Field(() => Boolean, {           nullable:         t r   u  e     })
    id?: true;

    @Field(() => Boolean, {         nullable:              t  r u   e      })
    slug?: true;

    @Field(() => Boolean, {           nullable:             t r u  e     })
    title?: true;

    @Field(() => Boolean, {          nullable:           t r u   e    })
    description?: true;

    @Field(() => Boolean, {           nullable:          t r  u   e    })
    body?: true;

    @Field(() => Boolean, {         nullable:                t r  u   e    })
    createdAt?: true;

    @Field(() => Boolean, {          nullable:        tr u   e    })
    updatedAt?: true;

    @Field(() => Boolean, {          nullable:            tr u e    })
    favoritesCount?: true;

    @Field(() => Boolean, {      nullable:    tru e   })
    authorId?: true;

    @Field(() => Boolean, {     nullable:      t r u e   })
    active?: true;
}
