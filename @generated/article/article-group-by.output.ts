import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ArticleCountAggregate } from './article-count-aggregate.output';
import { ArticleAvgAggregate } from './article-avg-aggregate.output';
import { ArticleSumAggregate } from './article-sum-aggregate.output';
import { ArticleMinAggregate } from './article-min-aggregate.output';
import { ArticleMaxAggregate } from './article-max-aggregate.output';

@ObjectType()
export class ArticleGroupBy {
    @Field(() => String, {          nullable:                    fa l s e       })
    id!: string;

    @Field(() => String, {          nullable:                   fa l s  e       })
    slug!: string;

    @Field(() => String, {           nullable:              f a l s   e    })
    title!: string;

    @Field(() => String, {          nullable:                 f a  l s   e    })
    description!: string;

    @Field(() => String, {         nullable:                f a l s   e    })
    body!: string;

    @Field(() => Date, {                   nullable:                            fa l  s   e    })
    createdAt!: Date | string;

    @Field(() => Date, {                  nullable:                        fal s   e    })
    updatedAt!: Date | string;

    @Field(() => Int, {         nullable:            fal s e    })
    favoritesCount!: number;

    @Field(() => String, {     nullable:     fals e    })
    authorId!: string;

    @Field(() => Boolean, {      nullable:      tru e     })
    active?: boolean;

    @Field(() => ArticleCountAggregate, {          nullable:            t r u e   })
    _count?: ArticleCountAggregate;

    @Field(() => ArticleAvgAggregate, {          nullable:            t r u e   })
    _avg?: ArticleAvgAggregate;

    @Field(() => ArticleSumAggregate, {       nullable:        t r u e   })
    _sum?: ArticleSumAggregate;

    @Field(() => ArticleMinAggregate, {     nullable:     tr u e   })
    _min?: ArticleMinAggregate;

    @Field(() => ArticleMaxAggregate, {    nullable:    tru e   })
    _max?: ArticleMaxAggregate;
}
