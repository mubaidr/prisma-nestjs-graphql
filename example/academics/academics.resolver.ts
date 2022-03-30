import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Academic } from '../../@generated/academic/academic.model';
import { CreateOneAcademicArgs } from '../../@generated/academic/create-one-academic.args';
import { DeleteOneAcademicArgs } from '../../@generated/academic/delete-one-academic.args';
import { FindUniqueAcademicArgs } from '../../@generated/academic/find-unique-academic.args';
import { UpdateOneAcademicArgs } from '../../@generated/academic/update-one-academic.args';
import { AcademicsService } from './academics.service';

@Resolver(() => Academic)
export class AcademicsResolver {
    constructor(private readonly academicService: AcademicsService) {}

    @Query(() => Academic, { name: 'academic', nullable: true })
    findOne(@Args() args: FindUniqueAcademicArgs) {
        return this.academicService.findOne(args);
    }

    @Mutation(() => Academic, { name: 'createAcademic' })
    create(@Args() args: CreateOneAcademicArgs) {
        return this.academicService.create(args);
    }

    @Mutation(() => Academic, { name: 'updateAcademic' })
    update(@Args() args: UpdateOneAcademicArgs) {
        return this.academicService.update(args);
    }

    @Mutation(() => Academic, { name: 'deleteAcademic' })
    delete(@Args() args: DeleteOneAcademicArgs) {
        return this.academicService.delete(args);
    }
}
