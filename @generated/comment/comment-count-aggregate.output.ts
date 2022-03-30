import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CommentCountAggregate {
    @Field(() => Int, {       nullable:       fal s e     })
    id!: number;

    @Field(() => Int, {       nullable:       fals   e    })
    createdAt!: number;

    @Field(() => Int, {       nullable:       fals   e    })
    updatedAt!: number;

    @Field(() => Int, {        nullable:       fals   e    })
    body!: number;

    @Field(() => Int, {        nullable:        fa l s e   })
    authorId!: number;

    @Field(() => Int, {      nullable:       fal s  e    })
    articleId!: number;

    @Field(() => Int, {      nullable:     fal s e   })
    _all!: number;
}
