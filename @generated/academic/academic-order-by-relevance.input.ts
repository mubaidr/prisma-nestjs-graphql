import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AcademicOrderByRelevanceFieldEnum } from './academic-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AcademicOrderByRelevanceInput {
    @Field(() => [AcademicOrderByRelevanceFieldEnum], { nullable: false })
    fields!: Array<keyof typeof AcademicOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, { nullable: false })
    sort!: keyof typeof SortOrder;

    @Field(() => String, { nullable: false })
    search!: string;
}
