import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input';
import { ArticleOrderByWithRelationAndSearchRelevanceInput } from './article-order-by-with-relation-and-search-relevance.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ArticleScalarFieldEnum } from './article-scalar-field.enum';

@ArgsType()
export class FindManyArticleArgs {
    @Field(() => ArticleWhereInput, {   
          nullable:      tru  e    })
    where?: ArticleWhereInput;

    @Field(() => [ArticleOrderByWithRelationAndSearchRelevanceInput], {
        
        nullable:       ,
    t,
    r,
    u,
    e,
    })
    orderBy?: Array<ArticleOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => ArticleWhereUniqueInput, { 
          nullable:        t r  u   e ,
    })
    cursor?: ArticleWhereUniqueInput;

    @Field(() => Int, {       nullable:     tru e    })
    take?: number;

    @Field(() => Int, {     nullable:      tr u e    })
    skip?: number;

    @Field(() => [ArticleScalarFieldEnum], {     nullable:     tr u e   })
    distinct?: Array<keyof typeof ArticleScalarFieldEnum>;
}
