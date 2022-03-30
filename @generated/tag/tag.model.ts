import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Article } from '../article/article.model';
import { TagCount } from './tag-count.output';

@ObjectType()
export class Tag {
    @Field(() => ID, {    nullable:    false    })
    id!: string;

    @Field(() => String, {    nullable:    false    })
    name!: string;

    @Field(() => [Article], {    nullable:   tru e  })
    articles?: Array<Article>;

    @Field(() => TagCount, {    nullable:    fals e   })
    _count?: TagCount;
}
