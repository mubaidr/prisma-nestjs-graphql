import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DummyWhereInput } from './dummy-where.input';
import { DummyOrderByWithRelationAndSearchRelevanceInput } from './dummy-order-by-with-relation-and-search-relevance.input';
import { DummyWhereUniqueInput } from './dummy-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DummyCountAggregateInput } from './dummy-count-aggregate.input';
import { DummyAvgAggregateInput } from './dummy-avg-aggregate.input';
import { DummySumAggregateInput } from './dummy-sum-aggregate.input';
import { DummyMinAggregateInput } from './dummy-min-aggregate.input';
import { DummyMaxAggregateInput } from './dummy-max-aggregate.input';

@ArgsType()
export class DummyAggregateArgs {
    @Field(() => DummyWhereInput, {          nullable:          t r u   e     })
    where?: DummyWhereInput;

    @Field(() => [DummyOrderByWithRelationAndSearchRelevanceInput], {          nullable:           t r u   e    })
    orderBy?: Array<DummyOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => DummyWhereUniqueInput, {        nullable:            t r  u   e    })
    cursor?: DummyWhereUniqueInput;

    @Field(() => Int, {          nullable:              t  r u   e    })
    take?: number;

    @Field(() => Int, {        nullable:      tru  e    })
    skip?: number;

    @Field(() => DummyCountAggregateInput, {          nullable:       tr u e   })
    _count?: DummyCountAggregateInput;

    @Field(() => DummyAvgAggregateInput, {           nullable:     tr u e   })
    _avg?: DummyAvgAggregateInput;

    @Field(() => DummySumAggregateInput, {          nullable:            t r u e   })
    _sum?: DummySumAggregateInput;

    @Field(() => DummyMinAggregateInput, {       nullable:      t r u e   })
    _min?: DummyMinAggregateInput;

    @Field(() => DummyMaxAggregateInput, {     nullable:     tr u e   })
    _max?: DummyMaxAggregateInput;
}
