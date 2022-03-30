import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutFavoriteArticlesInput } from '../user/user-unchecked-create-nested-many-without-favorite-articles.input';
import { CommentUncheckedCreateNestedManyWithoutArticleInput } from '../comment/comment-unchecked-create-nested-many-without-article.input';

@InputType()
export class ArticleUncheckedCreateWithoutTagsInput {
    @Field(() => String, {        nullable:               tr  u e    })
    id?: string;

    @Field(() => String, {           nullable:           f a l s   e     })
    slug!: string;

    @Field(() => String, {          nullable:          f a l s   e    })
    title!: string;

    @Field(() => String, {          nullable:        fal s   e    })
    description!: string;

    @Field(() => String, {           nullable:                 fals   e    })
    body!: string;

    @HideField()
    createdAt?: Date | string;

    @Field(() => Date, {          nullable:            tru  e    })
    updatedAt?: Date | string;

    @Field(() => Int, {   
          nullable:          tr,
    u,
    e   ,
    })
    favoritesCount?: number;

    @Field(() => String, {      nullable:,
     ,
     ,
     ,
     ,
     ,
       ,
       ,
         fals e   })
    authorId!: string;

    @Field(() => UserUncheckedCreateNestedManyWithoutFavoriteArticlesInput, {
        
        
        
        
        
         nullable:    ,
         ,
       ,
              ,
    t,
    r,
    u,
    e,
    })
    favoritedBy?: UserUncheckedCreateNestedManyWithoutFavoriteArticlesInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutArticleInput, {
        nullable:    tr u ,
    e,
    })
    comments?: CommentUncheckedCreateNestedManyWithoutArticleInput;

    @Field(() => Boolean, { 
           nullable:   tru e ,
    })
    active?: boolean;
}
