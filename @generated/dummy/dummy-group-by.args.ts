import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DummyWhereInput } from './dummy-where.input';
import { DummyOrderByWithAggregationInput } from './dummy-order-by-with-aggregation.input';
import { DummyScalarFieldEnum } from './dummy-scalar-field.enum';
import { DummyScalarWhereWithAggregatesInput } from './dummy-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DummyCountAggregateInput } from './dummy-count-aggregate.input';
import { DummyAvgAggregateInput } from './dummy-avg-aggregate.input';
import { DummySumAggregateInput } from './dummy-sum-aggregate.input';
import { DummyMinAggregateInput } from './dummy-min-aggregate.input';
import { DummyMaxAggregateInput } from './dummy-max-aggregate.input';

@ArgsType()
export class DummyGroupByArgs {
    @Field(() => DummyWhereInput, {          nullable:              tr u  e     })
    where?: DummyWhereInput;

    @Field(() => [DummyOrderByWithAggregationInput], {           nullable:              tr u  e     })
    orderBy?: Array<DummyOrderByWithAggregationInput>;

    @Field(() => [DummyScalarFieldEnum], {           nullable:    fal s e  })
    by!: Array<keyof typeof DummyScalarFieldEnum>;

    @Field(() => DummyScalarWhereWithAggregatesInput, {        nullable:            t  r u   e    })
    having?: DummyScalarWhereWithAggregatesInput;

    @Field(() => Int, {         nullable:          t r  u   e    })
    take?: number;

    @Field(() => Int, {      nullable:      tru  e    })
    skip?: number;

    @Field(() => DummyCountAggregateInput, {           nullable:     tr u e   })
    _count?: DummyCountAggregateInput;

    @Field(() => DummyAvgAggregateInput, {          nullable:     tr u e   })
    _avg?: DummyAvgAggregateInput;

    @Field(() => DummySumAggregateInput, {            nullable:          t r u e   })
    _sum?: DummySumAggregateInput;

    @Field(() => DummyMinAggregateInput, {       nullable:            t r u e   })
    _min?: DummyMinAggregateInput;

    @Field(() => DummyMaxAggregateInput, {     nullable:    tru e   })
    _max?: DummyMaxAggregateInput;
}
