import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "./material.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NgxMatSelectSearchModule } from "ngx-mat-select-search";
import { ImageCropperModule } from "ngx-image-cropper";

import { SelectWithSearchComponent } from "./select-with-search/select-with-search.component";
import { TestComponent } from "./test/test.component";
import { NgxSelectWithSearchComponent } from "./ngx-select-with-search/ngx-select-with-search.component";
import { NgxTestComponent } from "./ngx-test/ngx-test.component";
import { ImageCropComponent } from "./image-crop/image-crop.component";
import { ImageModelComponent } from "./image-crop/image-model/image-model.component";
import { NumberOnlyDirective } from "./number-only.directive";
import { ImgCropComponent } from "./img-crop/img-crop.component";
import { ImgModelComponent } from "./img-crop/img-model/img-model.component";
import { AngularCropperjsModule } from "angular-cropperjs";

@NgModule({
  declarations: [
    AppComponent,
    SelectWithSearchComponent,
    TestComponent,
    NgxSelectWithSearchComponent,
    NgxTestComponent,
    ImageModelComponent,
    ImageCropComponent,
    NumberOnlyDirective,
    ImgCropComponent,
    ImgModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageCropperModule,
    NgxMatSelectSearchModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    AngularCropperjsModule
  ],
  providers: [],
  entryComponents: [ImageModelComponent, ImgModelComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
