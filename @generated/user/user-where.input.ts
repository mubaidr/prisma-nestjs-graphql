import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UserListRelationFilter } from './user-list-relation-filter.input';
import { ArticleListRelationFilter } from '../article/article-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { EnumRoleNullableFilter } from '../prisma/enum-role-nullable-filter.input';
import { ProfileWhereInput } from '../profile/profile-where.input';

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {             nullable:                          t   r u  e        })
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {             nullable:                      t r  u e    })
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {              nullable:           t  r u  e      })
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {           nullable:                              t  r   u e    })
    id?: StringFilter;

    @Field(() => StringFilter, {           nullable:               t r u   e    })
    email?: StringFilter;

    @Field(() => StringFilter, {          nullable:                 t r u   e    })
    name?: StringFilter;

    @Field(() => StringFilter, {      nullable:                 t  r  u  e   })
    password?: StringFilter;

    @Field(() => StringNullableFilter, {         nullable:       tru   e    })
    bio?: StringNullableFilter;

    @Field(() => StringNullableFilter, {      nullable:              t r  u   e    })
    image?: StringNullableFilter;

    @Field(() => UserListRelationFilter, {           nullable:                         t  r   u  e    })
    following?: UserListRelationFilter;

    @Field(() => UserListRelationFilter, {           nullable:                 t  r   u e   })
    followers?: UserListRelationFilter;

    @Field(() => ArticleListRelationFilter, {            nullable:                t r  u   e    })
    favoriteArticles?: ArticleListRelationFilter;

    @Field(() => ArticleListRelationFilter, {               nullable:                  t r u    e    })
    articles?: ArticleListRelationFilter;

    @Field(() => CommentListRelationFilter, {            nullable:                        tr u  e   })
    comments?: CommentListRelationFilter;

    @Field(() => Int    NullableFilter, {       nullable:                 tr u  e    })
    countComments?: Int    NullableFil t er;

    @Field(() => FloatNullableFilter, {      nullable:      tr u e    })
    rating?: FloatNullableFilter;

    @Field(() => EnumRoleNullableFilter, {    nullable:     tru e    })
    role?: EnumRoleNullableFilter;

    @Field(() => ProfileWhereInput, {    nullable:   true   })
    profile?: ProfileWhereInput;
}
