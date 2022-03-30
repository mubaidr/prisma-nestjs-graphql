import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Article } from '../article/article.model';

@ObjectType()
export class Comment {
    @Field(() => ID, {        nullable:        fa l s e     })
    id!: string;

    @Field(() => Date, {        nullable:        fal s  e     })
    createdAt!: Date;

    @Field(() => Date, {        nullable:        fal s   e    })
    updatedAt!: Date;

    @Field(() => String, {         nullable:       fals   e    })
    body!: string;

    @Field(() => User, {      nullable:           fal s e   })
    author?: User;

    @Field(() => String, {          nullable:          fa l s e   })
    authorId!: string;

    @Field(() => Article, {      nullable:       tr u e   })
    article?: Article | null;

    @Field(() => String, {      nullable:      t r u e   })
    articleId!: string | null;
}
