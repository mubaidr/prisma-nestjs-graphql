import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';

@InputType()
export class ArticleScalarWhereInput {
    @Field(() => [ArticleScalarWhereInput], {         nullable:        tr    u   e       })
    AND?: Array<ArticleScalarWhereInput>;
    @Field(() => [ArticleScalarWhereInput], {            nullable:             t  r    u e      })
    OR?: Array<ArticleScalarWhereInput>;

    @Field(() => [ArticleScalarWhereInput], {           nullable:               t  r u    e      })
    NOT?: Array<ArticleScalarWhereInput>;

    @Field(() => StringFilter, {           nullable:                        t r u  e    })
    id?: StringFilter;

    @Field(() => StringFilter, {           nullable:                     t r u   e    })
    slug?: StringFilter;

    @Field(() => StringFilter, {           nullable:                  t r  u   e    })
    title?: StringFilter;

    @Field(() => StringFilter, {         nullable:                   t r u   e    })
    description?: StringFilter;

    @Field(() => StringFilter, {        nullable:                 t r u   e    })
    body?: StringFilter;

    @Field(() => DateTimeFilter, {           nullable:                  t  r u   e    })
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {        nullable:                  tr u e    })
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {       nullable:        tr u e    })
    favoritesCount?: IntFilter;

    @Field(() => StringFilter, {      nullable:    tru e   })
    authorId?: StringFilter;

    @Field(() => BoolNullableFilter, {   nullable:    tru e   })
    active?: BoolNullableFilter;
}
