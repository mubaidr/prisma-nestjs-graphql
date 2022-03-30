import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TagOrderByRelationAggregateInput } from '../tag/tag-order-by-relation-aggregate.input';
import { UserOrderByWithRelationAndSearchRelevanceInput } from '../user/user-order-by-with-relation-and-search-relevance.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { ArticleOrderByRelevanceInput } from './article-order-by-relevance.input';

@InputType()
export class ArticleOrderByWithRelationAndSearchRelevanceInput {
    @Field(() => SortOrder, {           nullable:                t r    u e      })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:           t  r u  e      })
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:               t  r  u  e   })
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:                  t  r u   e    })
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {        nullable:                 t r u   e    })
    body?: keyof typeof SortOrder;

    @Field(() => TagOrderByRelationAggregateInput, {        nullable:                      t r  u   e    })
    tags?: TagOrderByRelationAggregateInput;

    @Field(() => SortOrder, {           nullable:       tr  u  e   })
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {        nullable:      tru  e    })
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:      tr   u e    })
    favoritesCount?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, {     nullable:                     t  r   u e   })
    author?: UserOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {          nullable:                 t  r  u  e   })
    authorId?: keyof typeof SortOrder;

    @Field(() => UserOrderByRelationAggregateInput, {                nullable:                      t r  u   e    })
    favoritedBy?: UserOrderByRelationAggregateInput;

    @Field(() => CommentOrderByRelationAggregateInput, {         nullable:                 tr u  e    })
    comments?: CommentOrderByRelationAggregateInput;

    @Field(() => SortOrder, {      nullable:      tru  e    })
    active?: keyof typeof SortOrder;

    @Field(() => ArticleOrderByRelevanceInput, {    nullable:   true   })
    _relevance?: ArticleOrderByRelevanceInput;
}
