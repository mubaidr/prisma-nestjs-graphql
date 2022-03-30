import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentWhereInput } from './comment-where.input';
import { CommentOrderByWithAggregationInput } from './comment-order-by-with-aggregation.input';
import { CommentScalarFieldEnum } from './comment-scalar-field.enum';
import { CommentScalarWhereWithAggregatesInput } from './comment-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CommentCountAggregateInput } from './comment-count-aggregate.input';
import { CommentMinAggregateInput } from './comment-min-aggregate.input';
import { CommentMaxAggregateInput } from './comment-max-aggregate.input';

@ArgsType()
export class CommentGroupByArgs {
    @Field(() => CommentWhereInput, {         nullable:         tr  u  e     })
    where?: CommentWhereInput;

    @Field(() => [CommentOrderByWithAggregationInput], {         nullable:          tr u  e     })
    orderBy?: Array<CommentOrderByWithAggregationInput>;

    @Field(() => [CommentScalarFieldEnum], {         nullable:    fal s e  })
    by!: Array<keyof typeof CommentScalarFieldEnum>;

    @Field(() => CommentScalarWhereWithAggregatesInput, {         nullable:         t r u   e    })
    having?: CommentScalarWhereWithAggregatesInput;

    @Field(() => Int, {        nullable:         tr u    e    })
    take?: number;

    @Field(() => Int, {      nullable:       tru  e     })
    skip?: number;

    @Field(() => CommentCountAggregateInput, {          nullable:      t r u e   })
    _count?: CommentCountAggregateInput;

    @Field(() => CommentMinAggregateInput, {       nullable:        t r u e   })
    _min?: CommentMinAggregateInput;

    @Field(() => CommentMaxAggregateInput, {      nullable:      t r u e   })
    _max?: CommentMaxAggregateInput;
}
