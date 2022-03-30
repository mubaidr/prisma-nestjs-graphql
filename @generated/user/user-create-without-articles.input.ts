import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { UserCreateNestedManyWithoutFollowersInput } from './user-create-nested-many-without-followers.input';
import { UserCreateNestedManyWithoutFollowingInput } from './user-create-nested-many-without-following.input';
import { ArticleCreateNestedManyWithoutFavoritedByInput } from '../article/article-create-nested-many-without-favorited-by.input';
import { CommentCreateNestedManyWithoutAuthorInput } from '../comment/comment-create-nested-many-without-author.input';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { ProfileCreateNestedOneWithoutUserInput } from '../profile/profile-create-nested-one-without-user.input';

@InputType()
export class UserCreateWithoutArticlesInput {
    @Field(() => String, {               nullable:       tr u  e    })
    id?: string;

    @Field(() => Scalars.GraphQLEmailAddress, {          nullable:                      fa l s   e     })
    email!: string;

    @Field(() => String, {         nullable:                    fal s  e     })
    @Validator.MinLength(3)
    @Validator.MaxLength(50)
    name!: string;

    @Field(() => String, {               nullable:                     f a l s e   })
    password!: string;

    @Field(() => String, {         nullable:         t r u   e    })
    bio?: string;

    @Field(() => String, {      nullable:      tru  e    })
    image?: string;

    @Field(() => UserCreateNestedManyWithoutFollowersInput, {       nullable:         tr u  e    })
    following?: UserCreateNestedManyWithoutFollowersInput;

    @Field(() => UserCreateNestedManyWithoutFollowingInput, {       nullable:                 t r  u e   })
    followers?: UserCreateNestedManyWithoutFollowingInput;

    @Field(() => ArticleCreateNestedManyWithoutFavoritedByInput, {       nullable:         t r u   e    })
    favoriteArticles?: ArticleCreateNestedManyWithoutFavoritedByInput;

    @Field(() => CommentCreateNestedManyWithoutAuthorInput, {              nullable:                tr  u e   })
    comments?: CommentCreateNestedManyWithoutAuthorInput;

    @Field(() => Int, {              nullable:                  tr u   e    })
    countComments?: number;

    @Field(() => Float, {        nullable:             tr u e   })
    rating?: number;

    @Field(() => Role, {     nullable:     tru e    })
    role?: keyof typeof Role;

    @Field(() => ProfileCreateNestedOneWithoutUserInput, {     nullable:     tr u e   })
    profile?: ProfileCreateNestedOneWithoutUserInput;
}
