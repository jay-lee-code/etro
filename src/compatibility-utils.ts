import { Visual2D } from './layer/visual-2d'
import { VisualBase } from './layer/visual-base'
import { Movie } from './movie'

export function get2DRenderingContext (object: Movie | VisualBase): CanvasRenderingContext2D {
  if (object instanceof VisualBase && !(object instanceof Visual2D))
    throw new Error('Can only access 2D rendering context on a movie, a 2D layer or a layer with a view')

  return object.cctx
}