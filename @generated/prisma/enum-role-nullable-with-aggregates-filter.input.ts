import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from './role.enum';
import { NestedEnumRoleNullableWithAggregatesFilter } from './nested-enum-role-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumRoleNullableFilter } from './nested-enum-role-nullable-filter.input';

@InputType()
export class EnumRole  NullableWithAggregatesFilter {
    @Field(() => Role, {      nullable:        tr u  e     })
    equals?: keyof typeof Role;

    @Field(() => [Role], {       nullable:       tr u  e    })
    in?: Array<keyof typeof Role>;

    @Field(() => [Role], {      nullable:       tr u e   })
    notIn?: Array<keyof typeof Role>;

    @Field(() => NestedEnumRoleNullableWithAggregatesFilter, {      nullable:      tru  e    })
    not?: NestedEnumRoleNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {       nullable:       tr  u e    })
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumRoleNullableFilter, {       nullable:       tr u e   })
    _min?: NestedEnumRoleNullableFil t er;

    @Field(() => NestedEnumRoleNullableFilter, {       nullable:      t r u e   })
    _max?: NestedEnumRoleNullableFilter;
}
