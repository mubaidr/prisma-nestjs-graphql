import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {
    @Field(() => Int, {     nullable:     fal s e   })
    following?: number;

    @Field(() => Int, {     nullable:     fal s e   })
    followers?: number;

    @Field(() => Int, {     nullable:     false     })
    favoriteArticles?: number;

    @Field(() => Int, {     nullable:     fals e    })
    articles?: number;

    @Field(() => Int, {     nullable:     fal s e   })
    comments?: number;
}
