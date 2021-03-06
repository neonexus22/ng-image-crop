import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ImageCroppedEvent } from "ngx-image-cropper";

@Component({
  selector: "app-image-model",
  templateUrl: "./image-model.component.html",
  styleUrls: ["./image-model.component.css"]
})
export class ImageModelComponent implements OnInit {
  aspectRation: string;
  imageWidth: string;
  imageChangedEvent: any;
  croppedImage: any;
  cropper = { x1: 100, y1: 100, x2: 200, y2: 200 };
  constructor(
    public dialogRef: MatDialogRef<ImageModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.imageChangedEvent = this.data.imageChangedEvent;
    this.aspectRation = this.data.aspectRation;
    this.imageWidth = this.data.imageWidth;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
}
