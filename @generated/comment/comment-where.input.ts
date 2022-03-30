import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserWhereInput } from '../user/user-where.input';
import { ArticleWhereInput } from '../article/article-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class CommentWhereInput {
    @Field(() => [CommentWhereInput], {           nullable:            t r u  e      })
    AND?: Array<CommentWhereInput>;

    @Field(() => [CommentWhereInput], {           nullable:               t r  u  e    })
    OR?: Array<CommentWhereInput>;

    @Field(() => [CommentWhereInput], {          nullable:               t  r u   e     })
    NOT?: Array<CommentWhereInput>;

    @Field(() => StringFilter, {        nullable:                 t r  u  e    })
    id?: StringFilter;

    @Field(() => DateTimeFilter, {         nullable:            t  r u   e    })
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {       nullable:         tr  u   e    })
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {           nullable:      tru  e    })
    body?: StringFilter;

    @Field(() => UserWhereInput, {           nullable:         tr  u e    })
    author?: UserWhereInput;

    @Field(() => StringFilter, {          nullable:             tr u e   })
    authorId?: StringFilter;

    @Field(() => ArticleWhereInput, {       nullable:         tr u e   })
    article?: ArticleWhereInput;

    @Field(() => StringNullableFilter, {      nullable:      t r u e   })
    articleId?: StringNullableFilter;
}
