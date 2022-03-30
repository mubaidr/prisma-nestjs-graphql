import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagUncheckedCreateNestedManyWithoutArticlesInput } from '../tag/tag-unchecked-create-nested-many-without-articles.input';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutFavoriteArticlesInput } from '../user/user-unchecked-create-nested-many-without-favorite-articles.input';
import { CommentUncheckedCreateNestedManyWithoutArticleInput } from '../comment/comment-unchecked-create-nested-many-without-article.input';

@InputType()
export class ArticleUncheckedCreateWithoutAuthorInput {
    @Field(() => String, {        nullable:        t r    u e      })
    id?: string;

    @Field(() => String, {          nullable:             fa l s  e       })
    slug!: string;

    @Field(() => String, {           nullable:           fa l s   e    })
    title!: string;

    @Field(() => String, {          nullable:             fal s   e     })
    description!: string;

    @Field(() => String, {        nullable:             f a l s e   })
    body!: string;

    @Field(() => TagUncheckedCreateNestedManyWithoutArticlesInput, {            nullable:              t  r u   e    })
    tags?: TagUncheckedCreateNestedManyWithoutArticlesInput;

    @HideField()
    createdAt?: Date | string;

    @Field(() => Date, {      nullable:         t,
    r,
    u  ,
    e    })
    updatedAt?: Date | string;

    @Field(() => Int, {       nullable:        ,
    t,
    r,
    u,
    e   ,
    })
    favoritesCount?: number;

    @Field(() => UserUncheckedCreateNestedManyWithoutFavoriteArticlesInput, {
        
        
        
        
         
         
            nullable:                 ,
    t,
    r,
    u,
    e,
    })
    favoritedBy?: UserUncheckedCreateNestedManyWithoutFavoriteArticlesInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutArticleInput, {
        nullable:     t r  u,
    e,
    })
    comments?: CommentUncheckedCreateNestedManyWithoutArticleInput;

    @Field(() => Boolean, { 
          nullable:   tru e ,
    })
    active?: boolean;
}
