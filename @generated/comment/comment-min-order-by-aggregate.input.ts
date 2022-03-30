import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CommentMinOrderByAggregateInput {
    @Field(() => SortOrder, {      nullable:      tr u e    })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {      nullable:      tru  e    })
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {      nullable:      tru  e    })
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {      nullable:      tru  e    })
    body?: keyof typeof SortOrder;

    @Field(() => SortOrder, {      nullable:       tr u e   })
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {      nullable:      t r u e   })
    articleId?: keyof typeof SortOrder;
}
