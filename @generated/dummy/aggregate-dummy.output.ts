import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DummyCountAggregate } from './dummy-count-aggregate.output';
import { DummyAvgAggregate } from './dummy-avg-aggregate.output';
import { DummySumAggregate } from './dummy-sum-aggregate.output';
import { DummyMinAggregate } from './dummy-min-aggregate.output';
import { DummyMaxAggregate } from './dummy-max-aggregate.output';

@ObjectType()
export class AggregateDummy {
    @Field(() => DummyCountAggregate, {     nullable:     tr u e   })
    _count?: DummyCountAggregate;

    @Field(() => DummyAvgAggregate, {     nullable:     tr u e   })
    _avg?: DummyAvgAggregate;

    @Field(() => DummySumAggregate, {     nullable:     tr u e   })
    _sum?: DummySumAggregate;

    @Field(() => DummyMinAggregate, {     nullable:     tr u e   })
    _min?: DummyMinAggregate;

    @Field(() => DummyMaxAggregate, {     nullable:     tr u e   })
    _max?: DummyMaxAggregate;
}
