import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagUncheckedCreateNestedManyWithoutArticlesInput } from '../tag/tag-unchecked-create-nested-many-without-articles.input';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutFavoriteArticlesInput } from '../user/user-unchecked-create-nested-many-without-favorite-articles.input';

@InputType()
export class ArticleUncheckedCreateWithoutCommentsInput {
    @Field(() => String, {         nullable:              t r  u e    })
    id?: string;

    @Field(() => String, {          nullable:           fa l s  e       })
    slug!: string;

    @Field(() => String, {          nullable:         fal s   e     })
    title!: string;

    @Field(() => String, {          nullable:          fal s   e    })
    description!: string;

    @Field(() => String, {       nullable:                 fals  e     })
    body!: string;

    @Field(() => TagUncheckedCreateNestedManyWithoutArticlesInput, {            nullable:             t r u   e    })
    tags?: TagUncheckedCreateNestedManyWithoutArticlesInput;

    @HideField()
    createdAt?: Date | string;

    @Field(() => Date, {             
        nullable:                 tru e    })
    updatedAt?: Date | string;

    @Field(() => Int, {  
         
        
        
        
        
        
        nullable:        t,
    r,
    u,
    e  ,
    })
    favoritesCount?: number;

    @Field(() => String, {   
           nullable:      ,
       ,
     ,
     ,
     ,
         fals e   })
    authorId!: string;

    @Field(() => UserUncheckedCreateNestedManyWithoutFavoriteArticlesInput, {
        
         nullable:    tr  u,
    e,
    })
    favoritedBy?: UserUncheckedCreateNestedManyWithoutFavoriteArticlesInput;

    @Field(() => Boolean, {     nullable:    tru e   })
    active?: boolean;
}
