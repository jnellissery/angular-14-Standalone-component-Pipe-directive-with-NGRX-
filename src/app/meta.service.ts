import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom, map, tap } from 'rxjs';
import { ControlBase } from './controls/control-base';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(private http: HttpClient) {}

  async getMeta(): Promise<ControlBase[]> {
    return lastValueFrom(
      this.http
        .get('assets/meta.json')
        .pipe(
          map((meta: any) => meta.sort((a: any, b: any) => a.order - b.order))
        )
    );
  }

  toFormGroup(controls: ControlBase[], data: any) {
    const group: any = {};
    
    controls.forEach((control) => {
     
      if (control.controlType !== 'label') {
        group[control.key] = control.required
          ? new FormControl(data[control.key] || '', Validators.required)
          : new FormControl(data[control.key] || '');
      }
    });
console.log(group);
    return new FormGroup(group);
  }
}
