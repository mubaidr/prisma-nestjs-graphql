import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {         nullable:      tr u e    })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {         nullable:         tr u  e      })
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {         nullable:         t r u  e     })
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {         nullable:         t  r u   e     })
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:           t r u   e    })
    bio?: keyof typeof SortOrder;

    @Field(() => SortOrder, {         nullable:         t r u   e    })
    image?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:      tr u e    })
    countComments?: keyof typeof SortOrder;

    @Field(() => SortOrder, {       nullable:             tr u e   })
    rating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {     nullable:    tru e   })
    role?: keyof typeof SortOrder;
}
