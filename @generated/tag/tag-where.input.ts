import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ArticleListRelationFilter } from '../article/article-list-relation-filter.input';

@InputType()
export class TagWhereInput {
    @Field(() => [TagWhereInput], {      nullable:      tru e     })
    AND?: Array<TagWhereInput>;

    @Field(() => [TagWhereInput], {      nullable:      tr u e    })
    OR?: Array<TagWhereInput>;

    @Field(() => [TagWhereInput], {      nullable:      tru  e    })
    NOT?: Array<TagWhereInput>;

    @Field(() => StringFilter, {      nullable:      tr u e    })
    id?: StringFilter;

    @Field(() => StringFilter, {      nullable:      tru  e    })
    name?: StringFilter;

    @Field(() => ArticleListRelationFilter, {      nullable:      t r u e   })
    articles?: ArticleListRelationFilter;
}
