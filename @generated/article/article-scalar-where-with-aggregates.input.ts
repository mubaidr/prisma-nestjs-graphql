import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';

@InputType()
export class ArticleScalarWhereWithAggregatesInput {
    @Field(() => [ArticleScalarWhereWithAggregatesInput], {           nullable:          t  r u  e       })
    AND?: Array<ArticleScalarWhereWithAggregatesInput>;

    @Field(() => [ArticleScalarWhereWithAggregatesInput], {           nullable:                t r u  e    })
    OR?: Array<ArticleScalarWhereWithAggregatesInput>;

    @Field(() => [ArticleScalarWhereWithAggregatesInput], {            nullable:                   t  r u  e      })
    NOT?: Array<ArticleScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {          nullable:                t r u  e    })
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {           nullable:                t  r u   e    })
    slug?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {           nullable:            t  r u   e    })
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {           nullable:                t  r u   e    })
    description?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {           nullable:                  t r  u   e    })
    body?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {           nullable:              t r  u   e    })
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {            nullable:       tr u  e    })
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {           nullable:            tr u e    })
    favoritesCount?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {      nullable:          t r u e   })
    authorId?: StringWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {     nullable:    tru e   })
    active?: BoolNullableWithAggregatesFilter;
}
