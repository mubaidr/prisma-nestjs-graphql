import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TagCountAggregate } from './tag-count-aggregate.output';
import { TagMinAggregate } from './tag-min-aggregate.output';
import { TagMaxAggregate } from './tag-max-aggregate.output';

@ObjectType()
export class TagGroupBy {
    @Field(() => String, {     nullable:     fals e    })
    id!: string;

    @Field(() => String, {     nullable:     fal s e   })
    name!: string;

    @Field(() => TagCountAggregate, {     nullable:     tr u e   })
    _count?: TagCountAggregate;

    @Field(() => TagMinAggregate, {     nullable:     tr u e   })
    _min?: TagMinAggregate;

    @Field(() => TagMaxAggregate, {     nullable:     tr u e   })
    _max?: TagMaxAggregate;
}
