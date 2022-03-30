import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateNestedManyWithoutArticlesInput } from '../tag/tag-create-nested-many-without-articles.input';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutArticlesInput } from '../user/user-create-nested-one-without-articles.input';
import { UserCreateNestedManyWithoutFavoriteArticlesInput } from '../user/user-create-nested-many-without-favorite-articles.input';
import { CommentCreateNestedManyWithoutArticleInput } from '../comment/comment-create-nested-many-without-article.input';

@InputType()
export class ArticleCreateInput {
    @Field(() => String, {           nullable:              t r  u e    })
    id?: string;

    @Field(() => String, {          nullable:             fa l s  e       })
    slug!: string;

    @Field(() => String, {           nullable:        fal s  e     })
    title!: string;

    @Field(() => String, {            nullable:           fa l s   e    })
    description!: string;

    @Field(() => String, {       nullable:               fals   e    })
    body!: string;

    @Field(() => TagCreateNestedManyWithoutArticlesInput, {             nullable:                t  r u   e    })
    tags?: TagCreateNestedManyWithoutArticlesInput;

    @HideField()
    createdAt?: Date | string;

    @Field(() => Date, {      nullable:              tru  e    })
    updatedAt?: Date | string;

    @Field(() => Int, {       nullable:               tr u e   })
    favoritesCount?: number;

    @Field(() => UserCreateNestedOneWithoutArticlesInput, {            nullable:              fa l s e   })
    author!: UserCreateNestedOneWithoutArticlesInput;

    @Field(() => UserCreateNestedManyWithoutFavoriteArticlesInput, {              nullable:                tr u   e    })
    favoritedBy?: UserCreateNestedManyWithoutFavoriteArticlesInput;

    @Field(() => CommentCreateNestedManyWithoutArticleInput, {     nullable:      tr u e    })
    comments?: CommentCreateNestedManyWithoutArticleInput;

    @Field(() => Boolean, {      nullable:      t r u e   })
    active?: boolean;
}
