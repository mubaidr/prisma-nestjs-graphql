import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input';
import { ArticleOrderByWithRelationAndSearchRelevanceInput } from './article-order-by-with-relation-and-search-relevance.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ArticleCountAggregateInput } from './article-count-aggregate.input';
import { ArticleAvgAggregateInput } from './article-avg-aggregate.input';
import { ArticleSumAggregateInput } from './article-sum-aggregate.input';
import { ArticleMinAggregateInput } from './article-min-aggregate.input';
import { ArticleMaxAggregateInput } from './article-max-aggregate.input';

@ArgsType()
export class ArticleAggregateArgs {
    @Field(() => ArticleWhereInput, {   
           nullable:         t,
      r u   e      })
    where?: ArticleWhereInput;

    @Field(() => [ArticleOrderByWithRelationAndSearchRelevanceInput], {
        
        
        
        
        nullable:,
     ,
              ,
    t,
    r,
    u,
    e,
    })
    orderBy?: Array<ArticleOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => ArticleWhereUniqueInput, { 
            nullable:                     t r   u,
    e ,
    })
    cursor?: ArticleWhereUniqueInput;

    @Field(() => Int, {  
        nullable:       tru  e     })
    take?: number;

    @Field(() => Int, {        nullable:      tru e     })
    skip?: number;

    @Field(() => ArticleCountAggregateInput, {          nullable:     tr u e   })
    _count?: ArticleCountAggregateInput;

    @Field(() => ArticleAvgAggregateInput, {           nullable:       t r  u e   })
    _avg?: ArticleAvgAggregateInput;

    @Field(() => ArticleSumAggregateInput, {         nullable:        t r u e   })
    _sum?: ArticleSumAggregateInput;

    @Field(() => ArticleMinAggregateInput, {      nullable:        t r u e   })
    _min?: ArticleMinAggregateInput;

    @Field(() => ArticleMaxAggregateInput, {     nullable:     tr u e   })
    _max?: ArticleMaxAggregateInput;
}
