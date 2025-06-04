import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
     path: '',
     renderMode:RenderMode.Prerender
   },
   {
     path: 'products', 
     renderMode:RenderMode.Server
   },
   {
     path: 'products/:id', 
     renderMode:RenderMode.Prerender,
     getPrerenderParams: async() => {
         return [{id: '1'},{id: '3'}];
     },
   },
];
