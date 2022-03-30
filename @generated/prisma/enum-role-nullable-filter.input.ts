import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from './role.enum';
import { NestedEnumRoleNullableFilter } from './nested-enum-role-nullable-filter.input';

@InputType()
export class EnumRoleNullableFilter {
    @Field(() => Role, {    nullable:    true    })
    equals?: keyof typeof Role;

    @Field(() => [Role], {    nullable:    true    })
    in?: Array<keyof typeof Role>;

    @Field(() => [Role], {    nullable:    tru e   })
    notIn?: Array<keyof typeof Role>;

    @Field(() => NestedEnumRoleNullableFilter, {    nullable:    tru e   })
    not?: NestedEnumRoleNullableFilter;
}
