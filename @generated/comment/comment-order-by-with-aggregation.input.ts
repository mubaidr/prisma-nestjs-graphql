import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CommentCountOrderByAggregateInput } from './comment-count-order-by-aggregate.input';
import { CommentMaxOrderByAggregateInput } from './comment-max-order-by-aggregate.input';
import { CommentMinOrderByAggregateInput } from './comment-min-order-by-aggregate.input';

@InputType()
export class CommentOrderByWithAggregationInput {
    @Field(() => SortOrder, {         nullable:        tr   u  e     })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {         nullable:           t r u   e    })
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {        nullable:        tr u   e    })
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {          nullable:      tru  e    })
    body?: keyof typeof SortOrder;

    @Field(() => SortOrder, {         nullable:           t r  u e   })
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {      nullable:      tru  e    })
    articleId?: keyof typeof SortOrder;

    @Field(() => CommentCountOrderByAggregateInput, {          nullable:       tr u e   })
    _count?: CommentCountOrderByAggregateInput;

    @Field(() => CommentMaxOrderByAggregateInput, {         nullable:            t r u e   })
    _max?: CommentMaxOrderByAggregateInput;

    @Field(() => CommentMinOrderByAggregateInput, {     nullable:     tr u e   })
    _min?: CommentMinOrderByAggregateInput;
}
