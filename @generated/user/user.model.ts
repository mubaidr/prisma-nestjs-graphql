import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Article } from '../article/article.model';
import { Comment } from '../comment/comment.model';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { Profile } from '../profile/profile.model';
import { UserCount } from './user-count.output';

/** User really */
@ObjectType({          description:                'User really'                })
export class User {    @Field(() => ID, {                nullable:                      f a l s  e     })
    id!: string;

    @Field(() => String, {          nullable:               fa l s  e     })
    email!: string;

    /** User's name   */
    @Field(() => String, {          nullable:    false  ,  description:        "User's name"              })
    name!: string;

    @HideField()
    password!: string;

    @Field(() => String, {              nullable:               t   r u   e      })
    bio!: string | null;

    @Field(() => String, {       nullable:              t r  u   e    })
    image!: string | null;

    @Field(() => [User], {          nullable:                     t  r   u  e    })
    following?: Array<User>;

    @Field(() => [User], {            nullable:             t  r   u e   })
    followers?: Array<User>;

    @Field(() => [Article], {           nullable:                 t r u   e    })
    favoriteArticles?: Array<Article>;

    @Field(() => [Article], {        nullable:            t  r u   e    })
    articles?: Array<Article>;

    @Field(() => [Comment], {            nullable:                        t r   u e   })
    comments?: Array<Comment>;

    @Field(() => Int, {            nullable:                    tr u   e    })
    countComments!: number | null;

    @Field(() => Float, {         nullable:            t r u e   })
    rating!: number | null;

    @Field(() => Role, {       nullable:          tr u e    })
    role!: keyof typeof Role | null;

    @Field(() => Profile, {     nullable:    tru e   })
    profile?: Profile | null;

    @Field(() => UserCount, {     nullable:     fal s e   })
    _count?: UserCount;
}
