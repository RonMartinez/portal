import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PortalRegionModule } from './region/region.module';
import { PortalCountryModule } from './country/country.module';
import { PortalLocationModule } from './location/location.module';
import { PortalDepartmentModule } from './department/department.module';
import { PortalTaskModule } from './task/task.module';
import { PortalEmployeeModule } from './employee/employee.module';
import { PortalJobModule } from './job/job.module';
import { PortalJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        PortalRegionModule,
        PortalCountryModule,
        PortalLocationModule,
        PortalDepartmentModule,
        PortalTaskModule,
        PortalEmployeeModule,
        PortalJobModule,
        PortalJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortalEntityModule {}
