import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DummyMinOrderByAggregateInput {
    @Field(() => SortOrder, {        nullable:      tr u e    })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {        nullable:        tr u  e     })
    created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {        nullable:         t r  u e   })
    floaty?: keyof typeof SortOrder;

    @Field(() => SortOrder, {         nullable:        tr u   e    })
    int?: keyof typeof SortOrder;

    @Field(() => SortOrder, {         nullable:      tru  e    })
    float?: keyof typeof SortOrder;

    @Field(() => SortOrder, {         nullable:       tr  u  e   })
    bytes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {       nullable:            tr u e    })
    decimal?: keyof typeof SortOrder;

    @Field(() => SortOrder, {     nullable:    tru e   })
    bigInt?: keyof typeof SortOrder;
}
