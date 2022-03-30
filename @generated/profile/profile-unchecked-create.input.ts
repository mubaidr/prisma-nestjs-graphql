import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ProfileUncheckedCreateInput {
    @Field(() => Int, {   nullable:   true   })
    id?: number;

    @Field(() => String, {   nullable:   fals e  })
    userId!: string;

    @Field(() => String, {   nullable:   true   })
    dummy?: string;
}
