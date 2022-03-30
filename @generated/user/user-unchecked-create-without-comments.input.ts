import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { UserUncheckedCreateNestedManyWithoutFollowersInput } from './user-unchecked-create-nested-many-without-followers.input';
import { UserUncheckedCreateNestedManyWithoutFollowingInput } from './user-unchecked-create-nested-many-without-following.input';
import { ArticleUncheckedCreateNestedManyWithoutFavoritedByInput } from '../article/article-unchecked-create-nested-many-without-favorited-by.input';
import { ArticleUncheckedCreateNestedManyWithoutAuthorInput } from '../article/article-unchecked-create-nested-many-without-author.input';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutCommentsInput {
    @Field(() => String, {             nullable:        t r u e   })
    id?: string;

    @Field(() => Scalars.GraphQLEmailAddress, {           nullable:                fa l s   e     })
    email!: string;

    @Field(() => String, {          nullable:                      fa l s e     })
    @Validator.MinLength(3)
    @Validator.MaxLength(50)
    name!: string;

    @Field(() => String, {             nullable:              fa l s e   })
    password!: string;

    @Field(() => String, {         nullable:       tru   e    })
    bio?: string;

    @Field(() => String, {      nullable:      tru  e    })
    image?: string;

    @Field(() => UserUncheckedCreateNestedManyWithoutFollowersInput, {       nullable:      tr u e    })
    following?: UserUncheckedCreateNestedManyWithoutFollowersInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutFollowingInput, {      nullable:,
     ,
     ,
     ,
     ,
     ,
             ,
    t,
    r ,
    u e   })
    followers?: UserUncheckedCreateNestedManyWithoutFollowingInput;

    @Field(() => ArticleUncheckedCreateNestedManyWithoutFavoritedByInput, {
        
        
         nullable:                   ,
    t,
    r,
    u,
    e,
    })
    favoriteArticles?: ArticleUncheckedCreateNestedManyWithoutFavoritedByInput;

    @Field(() => ArticleUncheckedCreateNestedManyWithoutAuthorInput, {                nullable:                        t  r u   e    })
    articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => Int, {         nullable:               tr u  e    })
    countComments?: number;

    @Field(() => Float, {        nullable:      t r u e   })
    rating?: number;

    @Field(() => Role, {     nullable:      tr u e    })
    role?: keyof typeof Role;

    @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, {     nullable:    tru e   })
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
}
