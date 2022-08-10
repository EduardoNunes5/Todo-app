export class Page<T>{

  numberOfElements!: number;
  totalElements!: number;
  size!: number;
  content!: T[];
  empty!: boolean;
  first!: boolean;
  last!: boolean;
  totalPages!: number;
  number!: number;
}
