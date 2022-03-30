import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CommentMinAggregate {
    @Field(() => String, {      nullable:      tr u e    })
    id?: string;

    @Field(() => Date, {      nullable:      tru  e    })
    createdAt?: Date | string;

    @Field(() => Date, {      nullable:      tru  e    })
    updatedAt?: Date | string;

    @Field(() => String, {      nullable:      tru  e    })
    body?: string;

    @Field(() => String, {      nullable:       tr u e   })
    authorId?: string;

    @Field(() => String, {      nullable:      t r u e   })
    articleId?: string;
}
