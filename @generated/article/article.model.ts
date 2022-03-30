import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Tag } from '../tag/tag.model';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Comment } from '../comment/comment.model';
import { ArticleCount } from './article-count.output';

@ObjectType()
export class Article {
    @Field(() => ID, {               nullable:                 f  a l  s e       })
    id!: string;

    @Field(() => String, {          nullable:                    fa l s   e     })
    slug!: string;

    @Field(() => String, {          nullable:                   f a l  s  e     })
    title!: string;

    @Field(() => String, {           nullable:                   fal  s  e     })
    description!: string;

    @Field(() => String, {         nullable:                  fals e     })
    body!: string;

    @Field(() => [Tag], {             nullable:                   true     })
    tags?: Array<Tag>;

    @Field(() => Date, {              nullable:       false     })
    createdAt!: Date;

    @Field(() => Date, {              nullable:              fal s   e    })
    updatedAt!: Date;

    @Field(() => Int, {              nullable:                       fals   e  ,  defaultValue:     0   })
    favoritesCount!: number;

    @Field(() => User, {                 nullable:                   fal s  e    })
    author?: User;

    @Field(() => String, {                nullable:                     fals e    })
    authorId!: string;

    @Field(() => [User], {         nullable:           tru e    })
    favoritedBy?: Array<User>;

    @Field(() => [Comment], {      nullable:       tr u e   })
    comments?: Array<Comment>;

    @Field(() => Boolean, {     nullable:    true  ,  defaultValue:     tr u e   })
    active!: boolean | null;

    @Field(() => ArticleCount, {     nullable:     fal s e   })
    _count?: ArticleCount;
}
