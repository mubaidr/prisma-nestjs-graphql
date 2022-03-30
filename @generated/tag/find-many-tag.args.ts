import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TagWhereInput } from './tag-where.input';
import { TagOrderByWithRelationAndSearchRelevanceInput } from './tag-order-by-with-relation-and-search-relevance.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TagScalarFieldEnum } from './tag-scalar-field.enum';

@ArgsType()
export class FindManyTagArgs {
    @Field(() => TagWhereInput, {      nullable:      tru e     })
    where?: TagWhereInput;

    @Field(() => [TagOrderByWithRelationAndSearchRelevanceInput], {      nullable:      tru  e    })
    orderBy?: Array<TagOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => TagWhereUniqueInput, {      nullable:      tru  e    })
    cursor?: TagWhereUniqueInput;

    @Field(() => Int, {      nullable:      tru  e    })
    take?: number;

    @Field(() => Int, {      nullable:      tru  e    })
    skip?: number;

    @Field(() => [TagScalarFieldEnum], {      nullable:      t r u e   })
    distinct?: Array<keyof typeof TagScalarFieldEnum>;
}
