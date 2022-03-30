import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByRelationAggregateInput } from './user-order-by-relation-aggregate.input';
import { ArticleOrderByRelationAggregateInput } from '../article/article-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { ProfileOrderByWithRelationAndSearchRelevanceInput } from '../profile/profile-order-by-with-relation-and-search-relevance.input';
import { UserOrderByRelevanceInput } from './user-order-by-relevance.input';

@InputType()
export class UserOrderByWithRelationAndSearchRelevanceInput {
    @Field(() => SortOrder, {         nullable:          t r u   e     })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:                    t r   u    e      })
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:       tru  e     })
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:                  t r  u  e   })
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:                 t r u  e     })
    bio?: keyof typeof SortOrder;

    @Field(() => SortOrder, {      nullable:      tru  e    })
    image?: keyof typeof SortOrder;

    @Field(() => UserOrderByRelationAggregateInput, {           nullable:           t r  u e   })
    following?: UserOrderByRelationAggregateInput;

    @Field(() => UserOrderByRelationAggregateInput, {          nullable:                   t r   u  e   })
    followers?: UserOrderByRelationAggregateInput;

    @Field(() => ArticleOrderByRelationAggregateInput, {           nullable:             t r u   e    })
    favoriteArticles?: ArticleOrderByRelationAggregateInput;

    @Field(() => ArticleOrderByRelationAggregateInput, {        nullable:                  t r  u   e    })
    articles?: ArticleOrderByRelationAggregateInput;

    @Field(() => CommentOrderByRelationAggregateInput, {              nullable:         t  r  u  e   })
    comments?: CommentOrderByRelationAggregateInput;

    @Field(() => SortOrder, {        nullable:            t r  u   e    })
    countComments?: keyof typeof SortOrder;

    @Field(() => SortOrder, {               nullable:               t r  u e   })
    rating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {     nullable:              tr u   e    })
    role?: keyof typeof SortOrder;

    @Field(() => ProfileOrderByWithRelationAndSearchRelevanceInput, {       nullable:        tr u e    })
    profile?: ProfileOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => UserOrderByRelevanceInput, {    nullable:    tru e   })
    _relevance?: UserOrderByRelevanceInput;
}
