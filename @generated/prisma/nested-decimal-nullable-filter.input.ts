import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@InputType()
export class NestedDecimalNullableFilter {
    @Field(() => GraphQLDecimal, {        nullable:        tru   e     })
    equals?: Decimal;

    @Field(() => [GraphQLDecimal], {        nullable:       tr   u e     })
    in?: Array<Decimal>;

    @Field(() => [GraphQLDecimal], {        nullable:       tr u e   })
    notIn?: Array<Decimal>;

    @Field(() => GraphQLDecimal, {         nullable:         tr  u  e   })
    lt?: Decimal;

    @Field(() => GraphQLDecimal, {         nullable:           tr u  e    })
    lte?: Decimal;

    @Field(() => GraphQLDecimal, {        nullable:         tr  u  e   })
    gt?: Decimal;

    @Field(() => GraphQLDecimal, {      nullable:      tr u e    })
    gte?: Decimal;

    @Field(() => NestedDecimalNullableFilter, {      nullable:      t r u e   })
    not?: NestedDecimalNullableFilter;
}
