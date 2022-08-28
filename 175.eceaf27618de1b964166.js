"use strict";(self.webpackChunktodo_app=self.webpackChunktodo_app||[]).push([[175],{6175:(F,p,s)=>{s.r(p),s.d(p,{AuthModule:()=>A});var l=s(8583),n=s(665),t=s(639),f=s(7343),g=s(1841);let c=(()=>{class e extends f.I{constructor(o){super(o,"api/users"),this._http=o}login(o){return this._http.post("api/authenticate",o)}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(g.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=s(2290),u=s(2498);const h=function(){return["..","signin"]};let v=(()=>{class e{constructor(o,r,a,m){this.fb=o,this.userService=r,this.notificationService=a,this.router=m}ngOnInit(){this.itemForm=this.fb.group({username:["",n.kI.required],password:["",n.kI.required],email:["",[n.kI.required,n.kI.email]]})}onSubmit(){const o=this.formData();this.itemForm.valid&&this.userService.save(o).subscribe(r=>{this.router.navigate(["auth","signin"]),this.notificationService.success(`Usu\xe1rio ${o.username} cadastrado com sucesso!`)})}formData(){return{username:this.itemForm.value.username,password:this.itemForm.value.password,email:this.itemForm.value.email}}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(n.qu),t.Y36(c),t.Y36(d._W),t.Y36(u.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-signup"]],decls:19,vars:7,consts:[[1,"d-flex","justify-content-center","mt-4"],[1,"bg-dark","p-3","text-light","rounded",3,"formGroup","ngSubmit"],[1,"form-group"],["for","username"],["name","username","type","text","formControlName","username","required","",1,"form-control"],["for","email"],["name","email","type","email","formControlName","email",1,"form-control"],["for","password"],["name","password","type","password","formControlName","password",1,"form-control"],[1,"d-flex","flex-column","align-items-center","mt-3"],["type","submit",1,"btn","btn-primary"],["href","#",1,"mt-2","link-light",3,"routerLink"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"form",1),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(2,"div",2),t.TgZ(3,"label",3),t._uU(4,"Usu\xe1rio"),t.qZA(),t._UZ(5,"input",4),t.qZA(),t.TgZ(6,"div",2),t.TgZ(7,"label",5),t._uU(8,"Email"),t.qZA(),t._UZ(9,"input",6),t.qZA(),t.TgZ(10,"div",2),t.TgZ(11,"label",7),t._uU(12,"Senha"),t.qZA(),t._UZ(13,"input",8),t.qZA(),t.TgZ(14,"div",9),t.TgZ(15,"button",10),t._uU(16,"Registrar"),t.qZA(),t.TgZ(17,"a",11),t._uU(18,"J\xe1 possui uma conta? Entrar"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(1),t.Q6J("formGroup",r.itemForm),t.xp6(4),t.uIk("data-cy-testid","username-input"),t.xp6(4),t.uIk("data-cy-testid","email-input"),t.xp6(4),t.uIk("data-cy-testid","password-input"),t.xp6(2),t.uIk("data-cy-testid","confirm-button"),t.xp6(2),t.Q6J("routerLink",t.DdM(6,h)))},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,n.Q7,u.yS],styles:[""]}),e})();var Z=s(9402);const b=function(){return["..","signup"]},y=[{path:"",redirectTo:"signin"},{path:"signin",component:(()=>{class e{constructor(o,r,a,m,T){this.fb=o,this.userService=r,this.jwtService=a,this.router=m,this.notificationService=T}ngOnInit(){this.itemForm=this.fb.group({username:["",n.kI.required],password:["",n.kI.required]})}onSubmit(){const o=this.formData();this.itemForm.valid&&this.userService.login(o).subscribe(({token:r})=>{this.jwtService.setToken(r),this.router.navigate(["todos"])},({error:r})=>this.notificationService.error(r.message))}formData(){return{username:this.itemForm.value.username,password:this.itemForm.value.password}}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(n.qu),t.Y36(c),t.Y36(Z.T),t.Y36(u.F0),t.Y36(d._W))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:15,vars:6,consts:[[1,"d-flex","justify-content-center","mt-4"],[1,"bg-dark","p-3","text-light","rounded",3,"formGroup","ngSubmit"],[1,"form-group"],["for","username"],["name","username","type","text","formControlName","username","required","",1,"form-control"],["for","password"],["name","password","type","password","formControlName","password",1,"form-control"],[1,"d-flex","flex-column","align-items-center","mt-3"],["type","submit",1,"btn","btn-primary"],["href","#",1,"mt-2","link-light",3,"routerLink"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"form",1),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(2,"div",2),t.TgZ(3,"label",3),t._uU(4,"Usu\xe1rio"),t.qZA(),t._UZ(5,"input",4),t.qZA(),t.TgZ(6,"div",2),t.TgZ(7,"label",5),t._uU(8,"Senha"),t.qZA(),t._UZ(9,"input",6),t.qZA(),t.TgZ(10,"div",7),t.TgZ(11,"button",8),t._uU(12,"Entrar"),t.qZA(),t.TgZ(13,"a",9),t._uU(14,"N\xe3o possui uma conta? Registrar"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(1),t.Q6J("formGroup",r.itemForm),t.xp6(4),t.uIk("data-cy-testid","username-input"),t.xp6(4),t.uIk("data-cy-testid","password-input"),t.xp6(2),t.uIk("data-cy-testid","confirm-button"),t.xp6(2),t.Q6J("routerLink",t.DdM(5,b)))},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,n.Q7,u.yS],styles:[""]}),e})(),data:{title:"P\xe1gina de login"}},{path:"signup",component:v,data:{title:"P\xe1gina de cadastro"}},{path:"forbidden",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-forbidden"]],decls:2,vars:0,template:function(o,r){1&o&&(t.TgZ(0,"p"),t._uU(1,"forbidden works!"),t.qZA())},styles:[""]}),e})(),data:{title:"N\xe3o autorizado"}}];let S=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.Bz.forChild(y)],u.Bz]}),e})(),A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.ez,S,n.UX]]}),e})()}}]);