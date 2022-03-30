import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { NestedDecimalNullableFilter } from './nested-decimal-nullable-filter.input';

@InputType()
export class DecimalNullableFilter {
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
