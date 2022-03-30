import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationAndSearchRelevanceInput } from '../user/user-order-by-with-relation-and-search-relevance.input';
import { ArticleOrderByWithRelationAndSearchRelevanceInput } from '../article/article-order-by-with-relation-and-search-relevance.input';
import { CommentOrderByRelevanceInput } from './comment-order-by-relevance.input';

@InputType()
export class CommentOrderByWithRelationAndSearchRelevanceInput {
    @Field(() => SortOrder, {        nullable:        t r   u e     })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {         nullable:         t r u   e    })
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {         nullable:         t r u   e    })
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {        nullable:       tru   e    })
    body?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, {       nullable:       tr u e   })
    author?: UserOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {       nullable:       tr u e   })
    authorId?: keyof typeof SortOrder;

    @Field(() => ArticleOrderByWithRelationAndSearchRelevanceInput, {          nullable:              tr  u e   })
    article?: ArticleOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {         nullable:         tr u  e    })
    articleId?: keyof typeof SortOrder;

    @Field(() => CommentOrderByRelevanceInput, {      nullable:      t r u e   })
    _relevance?: CommentOrderByRelevanceInput;
}
