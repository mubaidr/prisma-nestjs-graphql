import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationAndSearchRelevanceInput } from '../user/user-order-by-with-relation-and-search-relevance.input';
import { ProfileOrderByRelevanceInput } from './profile-order-by-relevance.input';

@InputType()
export class ProfileOrderByWithRelationAndSearchRelevanceInput {
    @Field(() => SortOrder, {     nullable:     tru e    })
    id?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, {     nullable:     tr u e   })
    user?: UserOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {     nullable:     tru e    })
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {     nullable:     tru e    })
    dummy?: keyof typeof SortOrder;

    @Field(() => ProfileOrderByRelevanceInput, {     nullable:     tr u e   })
    _relevance?: ProfileOrderByRelevanceInput;
}
