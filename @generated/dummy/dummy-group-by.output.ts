import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { GraphQLJSON } from 'graphql-type-json';
import { DummyCountAggregate } from './dummy-count-aggregate.output';
import { DummyAvgAggregate } from './dummy-avg-aggregate.output';
import { DummySumAggregate } from './dummy-sum-aggregate.output';
import { DummyMinAggregate } from './dummy-min-aggregate.output';
import { DummyMaxAggregate } from './dummy-max-aggregate.output';

@ObjectType()
export class DummyGroupBy {
    @Field(() => String, {          nullable:                    f a l s  e       })
    id!: string;

    @Field(() => Date, {          nullable:                     fal s  e      })
    created!: Date | string;

    @Field(() => Float, {              nullable:                      fa l   s e     })
    floaty!: number;

    @Field(() => Int, {             nullable:             t r u   e    })
    int?: number;

    @Field(() => Float, {                 nullable:                         t r  u e   })
    float?: number;

    @Field(() => String, {                   nullable:                          t r  u  e   })
    bytes?: Buffer;

    @Field(() => GraphQLDecimal, {                nullable:                      t r u   e     })
    decimal?: Decimal;

    @Field(() => String, {          nullable:          t r  u  e     })
    bigInt?: bigint | number;

    @Field(() => GraphQLJSON, {      nullable:       tru e      })
    json?: any;

    @Field(() => [String], {      nullable:      tru  e    })
    friends?: Array<string>;

    @Field(() => DummyCountAggregate, {            nullable:                t r u e   })
    _count?: DummyCountAggregate;

    @Field(() => DummyAvgAggregate, {        nullable:        t r u e   })
    _avg?: DummyAvgAggregate;

    @Field(() => DummySumAggregate, {       nullable:        t r u e   })
    _sum?: DummySumAggregate;

    @Field(() => DummyMinAggregate, {     nullable:    tru e   })
    _min?: DummyMinAggregate;

    @Field(() => DummyMaxAggregate, {    nullable:     tr u e   })
    _max?: DummyMaxAggregate;
}
