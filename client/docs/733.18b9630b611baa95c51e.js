"use strict";(self.webpackChunktodo_app=self.webpackChunktodo_app||[]).push([[733],{733:(L,g,a)=>{a.r(g),a.d(g,{TodoModule:()=>J});var l=a(8583),c=a(665),t=a(639),d=a(2498),T=a(7343),m=a(1841);let p=(()=>{class n extends T.I{constructor(e){super(e,"api/todos"),this._http=e}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(m.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var h=a(2290);const b=function(){return[""]};let f=(()=>{class n{constructor(e,o,r,s,u){this.fb=e,this.route=o,this.todoService=r,this.router=s,this.notificationService=u,this.edit=!1}ngOnInit(){this.route.data.subscribe(e=>{const o=e.todo;this.edit=!!o,this.itemForm=this.fb.group({id:[o?o.id:""],title:[o?o.title:"",c.kI.required],description:[o?o.description:""]})})}onSubmit(){const e=this.formData();if(this.itemForm.valid){let o;o=this.getMethodAndMessage(e,this.edit,e.id),o.perform.subscribe(r=>{this.notificationService.success(o.message),this.router.navigate([""])},({error:r})=>this.notificationService.error(r.message))}}getMethodAndMessage(e,o,r){const s=o?"edit":"save";return{save:{perform:this.todoService.save(e),message:"todo criada com sucesso"},edit:{perform:this.todoService.put(r||0,e),message:"todo editada com sucesso"}}[s]}formData(){let e=localStorage.getItem("user");return e&&(e=JSON.parse(e)),{id:this.itemForm.value.id,title:this.itemForm.value.title,description:this.itemForm.value.description,user:e}}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.qu),t.Y36(d.gz),t.Y36(p),t.Y36(d.F0),t.Y36(h._W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-todo-change"]],decls:15,vars:7,consts:[[1,"d-flex","justify-content-center"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","title"],["name","title","type","text","formControlName","title","placeholder","t\xedtulo","required","",1,"form-control"],["name","description","type","text","formControlName","description","placeholder","descri\xe7\xe3o",1,"form-control"],[1,"d-flex","justify-content-center","mt-3"],["type","submit",1,"btn","btn-primary"],["type","button",1,"btn","btn-danger",3,"routerLink"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"form",1),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(2,"div",2),t.TgZ(3,"label",3),t._uU(4,"T\xedtulo"),t.qZA(),t._UZ(5,"input",4),t.qZA(),t.TgZ(6,"div",2),t.TgZ(7,"label",3),t._uU(8,"Descri\xe7\xe3o"),t.qZA(),t._UZ(9,"textarea",5),t.qZA(),t.TgZ(10,"div",6),t.TgZ(11,"button",7),t._uU(12,"Salvar"),t.qZA(),t.TgZ(13,"button",8),t._uU(14,"Cancelar"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("formGroup",o.itemForm),t.xp6(4),t.uIk("data-cy-testid","title-input"),t.xp6(4),t.uIk("data-cy-testid","description-input"),t.xp6(2),t.uIk("data-cy-testid","confirm-button"),t.xp6(2),t.Q6J("routerLink",t.DdM(6,b)),t.uIk("data-cy-testid","cancel-button"))},directives:[c._Y,c.JL,c.sg,c.Fj,c.JJ,c.u,c.Q7,d.rH],styles:[""]}),n})();const v=function(n){return{active:n}};function Z(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"li",2),t.TgZ(1,"button",6),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().onGoTo(s)})("keyup.enter",function(){const s=t.CHM(e).$implicit;return t.oxw().onGoTo(s)}),t._uU(2),t.qZA(),t.qZA()}if(2&n){const e=i.$implicit,o=t.oxw();t.Q6J("ngClass",t.VKq(7,v,e-1===o.current)),t.xp6(1),t.ekj("current",e-1===o.current),t.Q6J("disabled",e-1===o.current),t.uIk("aria-current",e-1===o.current?"page":null)("aria-label",e-1===o.current?"Current Page, Page "+e:"Go to Page "+e),t.xp6(1),t.hij(" ",e," ")}}let C=(()=>{class n{constructor(){this.current=0,this.total=10,this.goTo=new t.vpe,this.next=new t.vpe,this.previous=new t.vpe,this.pages=[]}ngOnInit(){this.pages=this.getPages(this.current,this.total)}ngOnChanges(e){(e.current&&e.current.currentValue||e.total&&e.total.currentValue)&&(this.pages=this.getPages(this.current,this.total))}onGoTo(e){this.goTo.emit(e)}onNext(){this.next.emit(this.current)}onPrevious(){this.previous.next(this.current)}scrollTop(){window.scrollTo({behavior:"smooth",top:0})}getPages(e,o){return o<=7?[...Array(o).keys()].map(r=>++r):e>5?e>=o-4?[1,-1,o-4,o-3,o-2,o-1,o]:[1,-1,e-1,e,e+1,-1,o]:[1,2,3,4,5,-1,o]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-pagination"]],inputs:{current:"current",total:"total"},outputs:{goTo:"goTo",next:"next",previous:"previous"},features:[t.TTD],decls:9,vars:9,consts:[["aria-label","pagination"],[1,"pagination"],[1,"page-item",3,"ngClass"],["aria-label","Ir para a p\xe1gina anterior",1,"page-link",3,"disabled","click"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],["aria-label","Ir \xe0 pr\xf3xima p\xe1gina",1,"page-link",3,"disabled","click"],["tabindex","0",1,"page-link",3,"disabled","click","keyup.enter"]],template:function(e,o){1&e&&(t.TgZ(0,"nav",0),t.TgZ(1,"ul",1),t.TgZ(2,"li",2),t.TgZ(3,"button",3),t.NdJ("click",function(){return o.onPrevious()}),t._uU(4," Ant. "),t.qZA(),t.qZA(),t.YNc(5,Z,3,9,"li",4),t.TgZ(6,"li",2),t.TgZ(7,"button",5),t.NdJ("click",function(){return o.onNext()}),t._uU(8," Pr\xf3x. "),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngClass",0===o.current?"disabled":""),t.uIk("data-cy","previous-btn"),t.xp6(1),t.Q6J("disabled",0===o.current),t.uIk("aria-disabled",1===o.current),t.xp6(2),t.Q6J("ngForOf",o.pages),t.xp6(1),t.Q6J("ngClass",o.current===o.total-1?"disabled":""),t.uIk("data-cy","next-btn"),t.xp6(1),t.Q6J("disabled",o.current===o.total-1),t.uIk("aria-disabled",o.current===o.total-1))},directives:[l.mk,l.sg],styles:[""]}),n})(),x=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-loading"]],decls:4,vars:0,consts:[[1,"lock-modal"],[1,"lds-ripple"],[1,"bg-dark"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"div"),t.qZA(),t.TgZ(2,"div",1),t._UZ(3,"div",2),t.qZA())},styles:[".lock-modal[_ngcontent-%COMP%]{background-color:#fff;opacity:.6;position:absolute;top:0;left:0;right:0;bottom:0;border-radius:inherit}.lds-ripple[_ngcontent-%COMP%]{display:inline-block;top:0;bottom:0;left:0;right:0;margin:auto;position:absolute;width:64px;height:64px}.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;opacity:1;border-radius:50%;animation:lds-ripple 1s cubic-bezier(0,.2,.8,1) infinite}.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){animation-delay:-.5s}@keyframes lds-ripple{0%{top:28px;left:28px;width:0;height:0;opacity:1}to{top:-1px;left:-1px;width:58px;height:58px;opacity:0}}"]}),n})();const y=function(n){return["edit",n]};function P(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td",15),t._uU(2),t.qZA(),t.TgZ(3,"td",16),t._uU(4),t.qZA(),t.TgZ(5,"td",17),t.TgZ(6,"button",18),t._uU(7,"editar"),t.qZA(),t.TgZ(8,"button",19),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw(2).onDeleteClick(s.id)}),t._uU(9,"remover"),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=i.$implicit,o=i.index;t.xp6(1),t.uIk("data-testid","todo-"+o),t.xp6(1),t.Oqu(e.id),t.xp6(1),t.uIk("data-cy","todo-title-"+o),t.xp6(1),t.Oqu(e.title),t.xp6(2),t.Q6J("routerLink",t.VKq(7,y,e.id)),t.uIk("data-cy","edit-button-"+o),t.xp6(2),t.uIk("data-cy","edit-button-"+o)}}function A(n,i){if(1&n&&(t.TgZ(0,"tbody"),t.YNc(1,P,10,9,"tr",14),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",null==e.todos?null:e.todos.content)}}function k(n,i){1&n&&(t.TgZ(0,"p",20),t._uU(1," Nenhuma tarefa criada ainda "),t.qZA())}function q(n,i){1&n&&t._UZ(0,"app-loading")}const O=function(){return["add"]};let M=(()=>{class n{constructor(e,o){this.todoService=e,this.notificationService=o,this.loading=!1,this.currentPage=0,this.totalPages=0,this.updated=!1}ngOnInit(){this.performSearch(0,10)}performSearch(e,o){this.loading=!0;const r=(new m.LE).set("page",e).set("size",o);this.todoService.findAllPaginated({params:r}).subscribe(s=>{this.todos=s,this.currentPage=s.number,this.totalPages=this.todos.totalPages,this.loading=!1})}onDeleteClick(e=0){this.loading=!0,this.todoService.delete(e).subscribe(o=>{var r;this.todos&&(this.todos.content=null===(r=this.todos.content)||void 0===r?void 0:r.filter(s=>s.id!==e)),this.todos.numberOfElements=this.todos.numberOfElements-1,this.todos.numberOfElements<=0&&!this.todos.first?this.performSearch(this.currentPage-1,10):this.todos.numberOfElements<=0?(this.todos.content.length=0,this.totalPages=0):this.todos.last||this.performSearch(this.currentPage,10),this.notificationService.success("Todo removida com sucesso"),this.loading=!1})}onGoTo(e){this.currentPage=e-1,this.performSearch(this.currentPage,10)}onNext(e){this.currentPage=e+1,this.performSearch(this.currentPage,10)}onPrevious(e){this.currentPage=e-1,this.performSearch(this.currentPage,10)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p),t.Y36(h._W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-todo-list"]],decls:22,vars:8,consts:[[1,"d-flex","flex-column","align-items-center"],["type","button",1,"btn","btn-primary","mb-3",3,"routerLink"],[1,"table-container","table"],[1,"table","table-hover","table-sm","table-responsive-sm"],[1,"col-1"],[1,"col-9"],["scope","col","id","table-item-id"],["scope","col"],["scope","col",1,"text-center"],[4,"ngIf","ngIfElse"],[1,"d-flex","justify-content-center"],[3,"current","total","goTo","next","previous"],["emptyTodos",""],[4,"ngIf"],[4,"ngFor","ngForOf"],["scope","row",1,"align-middle"],["id","coisa",1,"align-middle"],[1,"actions"],["type","button",1,"btn","btn-sm","btn-secondary",3,"routerLink"],["type","button",1,"btn","btn-sm","btn-danger",3,"click"],[1,"no-data"]],template:function(e,o){if(1&e&&(t.TgZ(0,"main",0),t.TgZ(1,"button",1),t._uU(2," Adicionar tarefa "),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"table",3),t.TgZ(5,"colgroup"),t._UZ(6,"col",4),t._UZ(7,"col",5),t.qZA(),t.TgZ(8,"thead"),t.TgZ(9,"tr"),t.TgZ(10,"th",6),t._uU(11,"id"),t.qZA(),t.TgZ(12,"th",7),t._uU(13,"t\xedtulo"),t.qZA(),t.TgZ(14,"th",8),t._uU(15,"a\xe7\xf5es"),t.qZA(),t.qZA(),t.qZA(),t.YNc(16,A,2,1,"tbody",9),t.qZA(),t.qZA(),t.TgZ(17,"div",10),t.TgZ(18,"app-pagination",11),t.NdJ("goTo",function(s){return o.onGoTo(s)})("next",function(s){return o.onNext(s)})("previous",function(s){return o.onPrevious(s)}),t.qZA(),t.qZA(),t.qZA(),t.YNc(19,k,2,0,"ng-template",null,12,t.W1O),t.YNc(21,q,1,0,"app-loading",13)),2&e){const r=t.MAs(20);t.xp6(1),t.Q6J("routerLink",t.DdM(7,O)),t.uIk("data-cy","create-todo"),t.xp6(15),t.Q6J("ngIf",o.todos&&o.todos.content&&o.todos.content.length>0)("ngIfElse",r),t.xp6(2),t.Q6J("current",o.currentPage)("total",o.totalPages),t.xp6(3),t.Q6J("ngIf",o.loading)}},directives:[d.rH,l.O5,C,l.sg,x],styles:[".table[_ngcontent-%COMP%]{overflow:auto}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:2em}.btn-sm[_ngcontent-%COMP%]{line-height:1em}.actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;border:0;margin:0;padding:0;align-items:center}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-right:.2em}@media (max-width: 550px){.actions[_ngcontent-%COMP%]{display:table-cell}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0}}.no-data[_ngcontent-%COMP%]{position:absolute}"]}),n})(),_=(()=>{class n{constructor(e){this.todoService=e}resolve(e){return this.todoService.findOne(e.params.todoId)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(p))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();const S=[{path:"",component:M,data:{title:"Listagem de todo"}},{path:"add",component:f,data:{title:"Adicionar todo"}},{path:"edit/:todoId",component:f,resolve:{todo:_},data:{title:"Editar todo"}}];let I=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.Bz.forChild(S)],d.Bz]}),n})();var F=a(4466);let J=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[p,_],imports:[[l.ez,I,c.UX,F.m]]}),n})()}}]);