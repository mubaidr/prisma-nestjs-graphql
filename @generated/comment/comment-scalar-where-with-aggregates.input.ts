import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class CommentScalarWhereWithAggregatesInput {
    @Field(() => [CommentScalarWhereWithAggregatesInput], {        nullable:         t r u  e     })
    AND?: Array<CommentScalarWhereWithAggregatesInput>;

    @Field(() => [CommentScalarWhereWithAggregatesInput], {         nullable:        t r u  e    })
    OR?: Array<CommentScalarWhereWithAggregatesInput>;

    @Field(() => [CommentScalarWhereWithAggregatesInput], {        nullable:        tr u   e    })
    NOT?: Array<CommentScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {         nullable:          t r u  e    })
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {         nullable:          t  r u   e    })
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {         nullable:         tr  u   e    })
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {        nullable:      tru  e    })
    body?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {        nullable:          t r u e   })
    authorId?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {      nullable:      t r u e   })
    articleId?: StringNullableWithAggregatesFilter;
}
