import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DummyWhereInput } from './dummy-where.input';
import { DummyOrderByWithRelationAndSearchRelevanceInput } from './dummy-order-by-with-relation-and-search-relevance.input';
import { DummyWhereUniqueInput } from './dummy-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DummyScalarFieldEnum } from './dummy-scalar-field.enum';

@ArgsType()
export class FindManyDummyArgs {
    @Field(() => DummyWhereInput, {      nullable:      tru e     })
    where?: DummyWhereInput;

    @Field(() => [DummyOrderByWithRelationAndSearchRelevanceInput], {      nullable:      tru  e    })
    orderBy?: Array<DummyOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => DummyWhereUniqueInput, {      nullable:      tru  e    })
    cursor?: DummyWhereUniqueInput;

    @Field(() => Int, {      nullable:      tru  e    })
    take?: number;

    @Field(() => Int, {      nullable:      tru  e    })
    skip?: number;

    @Field(() => [DummyScalarFieldEnum], {      nullable:      t r u e   })
    distinct?: Array<keyof typeof DummyScalarFieldEnum>;
}
