import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-identidadessecretas',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(login){
  	console.log(login.value.usuario);
  	console.log(login.value.senha);
  }

  passwordError: boolean = false;


  checkPassword(senha){
    if(senha.value.length!=6)
      this.passwordError = true;
    else
      this.passwordError = false;
  }
}
