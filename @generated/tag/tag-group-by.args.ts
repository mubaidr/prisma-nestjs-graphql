import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TagWhereInput } from './tag-where.input';
import { TagOrderByWithAggregationInput } from './tag-order-by-with-aggregation.input';
import { TagScalarFieldEnum } from './tag-scalar-field.enum';
import { TagScalarWhereWithAggregatesInput } from './tag-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TagCountAggregateInput } from './tag-count-aggregate.input';
import { TagMinAggregateInput } from './tag-min-aggregate.input';
import { TagMaxAggregateInput } from './tag-max-aggregate.input';

@ArgsType()
export class TagGroupByArgs {
    @Field(() => TagWhereInput, {         nullable:         tr  u  e     })
    where?: TagWhereInput;

    @Field(() => [TagOrderByWithAggregationInput], {         nullable:         tr  u  e     })
    orderBy?: Array<TagOrderByWithAggregationInput>;

    @Field(() => [TagScalarFieldEnum], {         nullable:      fal s e  })
    by!: Array<keyof typeof TagScalarFieldEnum>;

    @Field(() => TagScalarWhereWithAggregatesInput, {         nullable:           t r u   e    })
    having?: TagScalarWhereWithAggregatesInput;

    @Field(() => Int, {        nullable:          t r  u   e    })
    take?: number;

    @Field(() => Int, {       nullable:      tru  e    })
    skip?: number;

    @Field(() => TagCountAggregateInput, {          nullable:      t r u e   })
    _count?: TagCountAggregateInput;

    @Field(() => TagMinAggregateInput, {       nullable:        t r u e   })
    _min?: TagMinAggregateInput;

    @Field(() => TagMaxAggregateInput, {      nullable:      t r u e   })
    _max?: TagMaxAggregateInput;
}
