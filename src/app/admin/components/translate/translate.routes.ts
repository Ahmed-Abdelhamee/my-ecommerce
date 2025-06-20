import { Route } from "@angular/router";

export const routes: Route[] = [
    {path : '' , loadComponent : () => import('./components/add-translation/add-translation.component').then(c=> c.AddTranslationComponent) }
]