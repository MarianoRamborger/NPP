import { Presentaciones } from "./Presentaciones";
import {Articulos} from "./Articulos"
import {Destacados} from "./Destacados"
import {Misc} from "./Misc"

interface IResources {
  Presentaciones: Array<any>,
  Articulos: Array<any>,
  Destacados: Array<any>,
  Misc: Array<any>
}


export const Resources:IResources = {
  Presentaciones,
  Articulos,
  Destacados,
  Misc
}