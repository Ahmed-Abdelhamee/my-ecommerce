import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder } from '@angular/forms';
// Firebase Storage helpers (modular SDK v9)
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class UploadImagePromoService {

  constructor( private firestorage: AngularFireStorage, private formBuilder: FormBuilder) { }

  imagesArray: string[] = [];
  imgFiles: any[] = [];


  // --------------------------- change images to code --------------------------
  // promoImages: string[] = [];

  // readImages(event: any): string[] {
  //   for (const item of event.target.files) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(item);
  //     reader.onload = (e) => {
  //       this.promoImages.push(e.target?.result?.toString()!);
  //     }
  //   }
  //   return this.promoImages
  // }
  // ---------------------------------------------------------------------------


  // ---------------------------- upload images on server ----------------------------
  async uploadImg(arr: any) {
    this.imgFiles=[];
    for (const item of arr) {
      this.imgFiles.push(item)
    }
    if (this.imgFiles.length) {
     // ----------------  upload files code from chatgpt -----------------
        for (const file of this.imgFiles) {
            const path = `Products-Images/${Date.now()}_${file.name}`;
            const snapshot = await uploadBytes(ref(storage, path), file);
            const url = await getDownloadURL(snapshot.ref);
            this.imagesArray.push(url);
        }
    }
    return this.imagesArray
  }

}
