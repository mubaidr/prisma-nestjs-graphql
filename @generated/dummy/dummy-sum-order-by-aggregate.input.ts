import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DummySumOrderByAggregateInput {
    @Field(() => SortOrder, {     nullable:     tr u e   })
    floaty?: keyof typeof SortOrder;

    @Field(() => SortOrder, {     nullable:     true     })
    int?: keyof typeof SortOrder;

    @Field(() => SortOrder, {     nullable:     tru e    })
    float?: keyof typeof SortOrder;

    @Field(() => SortOrder, {     nullable:     tru e    })
    decimal?: keyof typeof SortOrder;

    @Field(() => SortOrder, {     nullable:     tr u e   })
    bigInt?: keyof typeof SortOrder;
}
