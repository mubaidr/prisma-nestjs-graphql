import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DummyCountOrderByAggregateInput } from './dummy-count-order-by-aggregate.input';
import { DummyAvgOrderByAggregateInput } from './dummy-avg-order-by-aggregate.input';
import { DummyMaxOrderByAggregateInput } from './dummy-max-order-by-aggregate.input';
import { DummyMinOrderByAggregateInput } from './dummy-min-order-by-aggregate.input';
import { DummySumOrderByAggregateInput } from './dummy-sum-order-by-aggregate.input';

@InputType()
export class DummyOrderByWithAggregationInput {
    @Field(() => SortOrder, {           nullable:             t r   u e      })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {            nullable:                tr u  e     })
    created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:                t r u  e    })
    floaty?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:         t r u  e     })
    int?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:           t r  u e   })
    float?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:               t  r   u e   })
    bytes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {            nullable:                        t r  u   e    })
    decimal?: keyof typeof SortOrder;

    @Field(() => SortOrder, {              nullable:                t  r u   e    })
    bigInt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {       nullable:        tru    e    })
    json?: keyof typeof SortOrder;

    @Field(() => SortOrder, {     nullable:     tru e    })
    friends?: keyof typeof SortOrder;

    @Field(() => DummyCountOrderByAggregateInput, {           nullable:     tr u e   })
    _count?: DummyCountOrderByAggregateInput;

    @Field(() => DummyAvgOrderByAggregateInput, {               nullable:          t r u e   })
    _avg?: DummyAvgOrderByAggregateInput;

    @Field(() => DummyMaxOrderByAggregateInput, {           nullable:                  t r u e   })
    _max?: DummyMaxOrderByAggregateInput;

    @Field(() => DummyMinOrderByAggregateInput, {      nullable:    tru e   })
    _min?: DummyMinOrderByAggregateInput;

    @Field(() => DummySumOrderByAggregateInput, {    nullable:    tru e   })
    _sum?: DummySumOrderByAggregateInput;
}
