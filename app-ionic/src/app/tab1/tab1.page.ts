import { Component } from '@angular/core';
import { 
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
 } from '@angular/forms';
 import { ApirestService } from '../apirest.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  formularioregistro: FormGroup;
  constructor(private api: ApirestService,public fb: FormBuilder) { }
  ngOnInit(){
    this.formularioregistro = this.fb.group({
      name :['',Validators.required],
      email :['',[Validators.required]],
      password :['',Validators.required]
    });
  }
  registro(form:FormGroup){
    this.api.Registro(form.value.name, form.value.email,form.value.password).subscribe(data=>{
      console.log(data);
    })
  }
}
