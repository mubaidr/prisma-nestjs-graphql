import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CommentMinAggregateInput {
    @Field(() => Boolean, {      nullable:      tr u e    })
    id?: true;

    @Field(() => Boolean, {      nullable:      tru  e    })
    createdAt?: true;

    @Field(() => Boolean, {      nullable:      tru  e    })
    updatedAt?: true;

    @Field(() => Boolean, {      nullable:      tru  e    })
    body?: true;

    @Field(() => Boolean, {      nullable:       tr u e   })
    authorId?: true;

    @Field(() => Boolean, {      nullable:      t r u e   })
    articleId?: true;
}
