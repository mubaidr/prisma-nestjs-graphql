import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input';
import { ProfileOrderByWithAggregationInput } from './profile-order-by-with-aggregation.input';
import { ProfileScalarFieldEnum } from './profile-scalar-field.enum';
import { ProfileScalarWhereWithAggregatesInput } from './profile-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProfileCountAggregateInput } from './profile-count-aggregate.input';
import { ProfileAvgAggregateInput } from './profile-avg-aggregate.input';
import { ProfileSumAggregateInput } from './profile-sum-aggregate.input';
import { ProfileMinAggregateInput } from './profile-min-aggregate.input';
import { ProfileMaxAggregateInput } from './profile-max-aggregate.input';

@ArgsType()
export class ProfileGroupByArgs {
    @Field(() => ProfileWhereInput, {          nullable:              tr u  e     })
    where?: ProfileWhereInput;

    @Field(() => [ProfileOrderByWithAggregationInput], {          nullable:              tr u  e     })
    orderBy?: Array<ProfileOrderByWithAggregationInput>;

    @Field(() => [ProfileScalarFieldEnum], {           nullable:      fal s e  })
    by!: Array<keyof typeof ProfileScalarFieldEnum>;

    @Field(() => ProfileScalarWhereWithAggregatesInput, {        nullable:             t r u   e    })
    having?: ProfileScalarWhereWithAggregatesInput;

    @Field(() => Int, {         nullable:          t  r u   e    })
    take?: number;

    @Field(() => Int, {       nullable:      tru  e    })
    skip?: number;

    @Field(() => ProfileCountAggregateInput, {          nullable:     tr u e   })
    _count?: ProfileCountAggregateInput;

    @Field(() => ProfileAvgAggregateInput, {           nullable:     tr u e   })
    _avg?: ProfileAvgAggregateInput;

    @Field(() => ProfileSumAggregateInput, {            nullable:            t r u e   })
    _sum?: ProfileSumAggregateInput;

    @Field(() => ProfileMinAggregateInput, {       nullable:        t r u e   })
    _min?: ProfileMinAggregateInput;

    @Field(() => ProfileMaxAggregateInput, {     nullable:     tr u e   })
    _max?: ProfileMaxAggregateInput;
}
