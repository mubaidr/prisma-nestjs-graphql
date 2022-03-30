import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class CommentScalarWhereInput {
    @Field(() => [CommentScalarWhereInput], {         nullable:        tru  e      })
    AND?: Array<CommentScalarWhereInput>;

    @Field(() => [CommentScalarWhereInput], {        nullable:          t r  u e    })
    OR?: Array<CommentScalarWhereInput>;

    @Field(() => [CommentScalarWhereInput], {         nullable:         t r u   e    })
    NOT?: Array<CommentScalarWhereInput>;

    @Field(() => StringFilter, {        nullable:            t r u  e    })
    id?: StringFilter;

    @Field(() => DateTimeFilter, {         nullable:         tr  u   e    })
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {       nullable:         t r u   e    })
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {          nullable:          tr u   e    })
    body?: StringFilter;

    @Field(() => StringFilter, {       nullable:            t r u e   })
    authorId?: StringFilter;

    @Field(() => StringNullableFilter, {     nullable:    tru e   })
    articleId?: StringNullableFilter;
}
