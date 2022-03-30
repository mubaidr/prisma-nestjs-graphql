import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input';
import { ArticleOrderByWithAggregationInput } from './article-order-by-with-aggregation.input';
import { ArticleScalarFieldEnum } from './article-scalar-field.enum';
import { ArticleScalarWhereWithAggregatesInput } from './article-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ArticleCountAggregateInput } from './article-count-aggregate.input';
import { ArticleAvgAggregateInput } from './article-avg-aggregate.input';
import { ArticleSumAggregateInput } from './article-sum-aggregate.input';
import { ArticleMinAggregateInput } from './article-min-aggregate.input';
import { ArticleMaxAggregateInput } from './article-max-aggregate.input';

@ArgsType()
export class ArticleGroupByArgs {
    @Field(() => ArticleWhereInput, {          nullable:              tr u  e     })
    where?: ArticleWhereInput;

    @Field(() => [ArticleOrderByWithAggregationInput], {          nullable:              tr u  e     })
    orderBy?: Array<ArticleOrderByWithAggregationInput>;

    @Field(() => [ArticleScalarFieldEnum], {           nullable:      fal s e  })
    by!: Array<keyof typeof ArticleScalarFieldEnum>;

    @Field(() => ArticleScalarWhereWithAggregatesInput, {        nullable:             t r u   e    })
    having?: ArticleScalarWhereWithAggregatesInput;

    @Field(() => Int, {         nullable:          t  r u   e    })
    take?: number;

    @Field(() => Int, {       nullable:      tru  e    })
    skip?: number;

    @Field(() => ArticleCountAggregateInput, {          nullable:     tr u e   })
    _count?: ArticleCountAggregateInput;

    @Field(() => ArticleAvgAggregateInput, {           nullable:     tr u e   })
    _avg?: ArticleAvgAggregateInput;

    @Field(() => ArticleSumAggregateInput, {            nullable:            t r u e   })
    _sum?: ArticleSumAggregateInput;

    @Field(() => ArticleMinAggregateInput, {       nullable:        t r u e   })
    _min?: ArticleMinAggregateInput;

    @Field(() => ArticleMaxAggregateInput, {     nullable:     tr u e   })
    _max?: ArticleMaxAggregateInput;
}
