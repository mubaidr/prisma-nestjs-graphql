import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { UserOrderByWithRelationAndSearchRelevanceInput } from './user-order-by-with-relation-and-search-relevance.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserScalarFieldEnum } from './user-scalar-field.enum';

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {      nullable:      tru e     })
    where?: UserWhereInput;

    @Field(() => [UserOrderByWithRelationAndSearchRelevanceInput], {      nullable:      tru  e    })
    orderBy?: Array<UserOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => UserWhereUniqueInput, {      nullable:      tru  e    })
    cursor?: UserWhereUniqueInput;

    @Field(() => Int, {      nullable:      tru  e    })
    take?: number;

    @Field(() => Int, {      nullable:      tru  e    })
    skip?: number;

    @Field(() => [UserScalarFieldEnum], {      nullable:      t r u e   })
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
