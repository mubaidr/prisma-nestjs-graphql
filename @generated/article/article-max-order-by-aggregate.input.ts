import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ArticleMaxOrderByAggregateInput {
    @Field(() => SortOrder, {          nullable:            t r  u e    })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {          nullable:          t r u   e     })
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {        nullable:             t r u   e    })
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {          nullable:            t r  u   e    })
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {         nullable:                t  r u   e    })
    body?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:            t r  u   e    })
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {            nullable:       tru   e    })
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {        nullable:              tr u e    })
    favoritesCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {       nullable:      t r u e   })
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {     nullable:     tr u e   })
    active?: keyof typeof SortOrder;
}
