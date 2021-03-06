import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeComponent } from './view/home/home.component';
import { SearchComponent } from './view/search/search.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RepositoryComponent } from './components/repository/repository.component';

import { reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './effects';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CustomIconChipComponent } from './components/custom-icon-chip/custom-icon-chip.component';
import { RepositoryDialogComponent } from './components/repository-dialog/repository-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ToolbarComponent,
    RepositoryComponent,
    PaginationComponent,
    CustomIconChipComponent,
    RepositoryDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
      logOnly: environment.production
    }),
    EffectsModule.forRoot(Effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
