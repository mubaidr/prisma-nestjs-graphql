import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input';
import { ProfileOrderByWithRelationAndSearchRelevanceInput } from './profile-order-by-with-relation-and-search-relevance.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProfileScalarFieldEnum } from './profile-scalar-field.enum';

@ArgsType()
export class FindManyProfileArgs {
    @Field(() => ProfileWhereInput, {   
          nullable:      tru  e    })
    where?: ProfileWhereInput;

    @Field(() => [ProfileOrderByWithRelationAndSearchRelevanceInput], {
        
        nullable:       ,
    t,
    r,
    u,
    e,
    })
    orderBy?: Array<ProfileOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => ProfileWhereUniqueInput, { 
          nullable:        t r  u   e ,
    })
    cursor?: ProfileWhereUniqueInput;

    @Field(() => Int, {       nullable:     tru e    })
    take?: number;

    @Field(() => Int, {     nullable:      tr u e    })
    skip?: number;

    @Field(() => [ProfileScalarFieldEnum], {     nullable:     tr u e   })
    distinct?: Array<keyof typeof ProfileScalarFieldEnum>;
}
