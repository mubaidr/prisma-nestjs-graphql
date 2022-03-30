import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ArticleCountOrderByAggregateInput } from './article-count-order-by-aggregate.input';
import { ArticleAvgOrderByAggregateInput } from './article-avg-order-by-aggregate.input';
import { ArticleMaxOrderByAggregateInput } from './article-max-order-by-aggregate.input';
import { ArticleMinOrderByAggregateInput } from './article-min-order-by-aggregate.input';
import { ArticleSumOrderByAggregateInput } from './article-sum-order-by-aggregate.input';

@InputType()
export class ArticleOrderByWithAggregationInput {
    @Field(() => SortOrder, {           nullable:                  t   r u  e      })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:                  t r   u  e      })
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:                      t r u   e     })
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:                    t r  u   e    })
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:                   t r u   e    })
    body?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:                        t r  u   e    })
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {               nullable:            t r  u   e    })
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:           t r  u  e    })
    favoritesCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {       nullable:      tru  e    })
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {      nullable:      tru  e    })
    active?: keyof typeof SortOrder;

    @Field(() => ArticleCountOrderByAggregateInput, {           nullable:     tr u e   })
    _count?: ArticleCountOrderByAggregateInput;

    @Field(() => ArticleAvgOrderByAggregateInput, {                nullable:              t r u e   })
    _avg?: ArticleAvgOrderByAggregateInput;

    @Field(() => ArticleMaxOrderByAggregateInput, {         nullable:              t r u e   })
    _max?: ArticleMaxOrderByAggregateInput;

    @Field(() => ArticleMinOrderByAggregateInput, {      nullable:      t r u e   })
    _min?: ArticleMinOrderByAggregateInput;

    @Field(() => ArticleSumOrderByAggregateInput, {    nullable:   true   })
    _sum?: ArticleSumOrderByAggregateInput;
}
