import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { TagListRelationFilter } from '../tag/tag-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { UserWhereInput } from '../user/user-where.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';

@InputType()
export class ArticleWhereInput {
    @Field(() => [ArticleWhereInput], {           nullable:                      t   r u  e        })
    AND?: Array<ArticleWhereInput>;

    @Field(() => [ArticleWhereInput], {               nullable:                            t r u  e    })
    OR?: Array<ArticleWhereInput>;

    @Field(() => [ArticleWhereInput], {            nullable:                             t  r u   e     })
    NOT?: Array<ArticleWhereInput>;

    @Field(() => StringFilter, {           nullable:             t  r u  e    })
    id?: StringFilter;

    @Field(() => StringFilter, {           nullable:                            t  r u  e     })
    slug?: StringFilter;

    @Field(() => StringFilter, {           nullable:                           t  r   u e   })
    title?: StringFilter;

    @Field(() => StringFilter, {       nullable:                 t r u   e    })
    description?: StringFilter;

    @Field(() => StringFilter, {     nullable:                        tr u e    })
    body?: StringFilter;

    @Field(() => TagListRelationFilter, {            nullable:                 tr u  e    })
    tags?: TagListRelationFilter;

    @Field(() => DateTimeFilter, {         nullable:      tru  e    })
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {        nullable:                  t r  u   e    })
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {         nullable:                      t r u e   })
    favoritesCount?: IntFilter;

    @Field(() => UserWhereInput, {         nullable:                t r  u  e   })
    author?: UserWhereInput;

    @Field(() => StringFilter, {        nullable:             t r  u e   })
    authorId?: StringFilter;

    @Field(() => UserListRelationFilter, {       nullable:       tru   e    })
    favoritedBy?: UserListRelationFilter;

    @Field(() => CommentListRelationFilter, {      nullable:        tr u e    })
    comments?: CommentListRelationFilter;

    @Field(() => BoolNullableFilter, {    nullable:   true   })
    active?: BoolNullableFilter;
}
