import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TagWhereInput } from './tag-where.input';
import { TagOrderByWithRelationAndSearchRelevanceInput } from './tag-order-by-with-relation-and-search-relevance.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TagCountAggregateInput } from './tag-count-aggregate.input';
import { TagMinAggregateInput } from './tag-min-aggregate.input';
import { TagMaxAggregateInput } from './tag-max-aggregate.input';

@ArgsType()
export class TagAggregateArgs {
    @Field(() => TagWhereInput, {        nullable:        tru   e     })
    where?: TagWhereInput;

    @Field(() => [TagOrderByWithRelationAndSearchRelevanceInput], {        nullable:        tr u   e    })
    orderBy?: Array<TagOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => TagWhereUniqueInput, {        nullable:          t r  u   e    })
    cursor?: TagWhereUniqueInput;

    @Field(() => Int, {        nullable:       tru   e    })
    take?: number;

    @Field(() => Int, {       nullable:       tru  e     })
    skip?: number;

    @Field(() => TagCountAggregateInput, {         nullable:       tr u e   })
    _count?: TagCountAggregateInput;

    @Field(() => TagMinAggregateInput, {       nullable:        t r u e   })
    _min?: TagMinAggregateInput;

    @Field(() => TagMaxAggregateInput, {      nullable:      t r u e   })
    _max?: TagMaxAggregateInput;
}
